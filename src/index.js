//импортируем нужное из модулей:
import { Card } from './pages/card.js';
import { FormValidator } from './pages/validate.js';
import './pages/index.css'; // добавьте импорт главного файла стилей







//создаем настроечный объект
const formPopupRules = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popub__submit-button',
    inactiveButtonClass: 'popub__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

//Находим и обьявляем попап с профилем
const popup = document.querySelector('#popup-edit');
const popupSubmitButton = popup.querySelector('.popub__submit-button');

//Находим и обьявляем попап с добавлением элемента
const popupAdd = document.querySelector('#popup-add');
const popupAddSubmitButton = popupAdd.querySelector('.popub__submit-button');


//Находим и обьявляем в popupImg .popup-img
export const popupImg = document.querySelector('#popup-img');

//Находим кнопку эдит автора
const popubEditButton = document.querySelector('.profilee-info__edit-button');

//находим кнопку добавить карточку element
const popubAddButton = document.querySelector('.profile__add-button');

// находим и обьявляем кнопку закрытия попапа
const closeButton = document.querySelector('.popub__button-close');

// находим и обьявляем кнопку закрытия попапа с добавлением
const closeAddButton = document.querySelector('#popub-add__button-close');

// находим и обьявляем кнопку закрытия попапа-img
const closeImgButton = document.querySelector('.popup-img__button-close');

//находим и обьявляем формы попапов
const editForm = document.querySelector('#popup__container');
const addform = document.querySelector('#popup-add__container');



//находим и обьявляем размещенные на странице имя и профессию
const currentName = document.querySelector('.profilee-info__title');
const currentProfession = document.querySelector('.profilee-info__subtitle');

//находим и обьявляем поля вводов попапов
const authorNameInput = document.querySelector('#popup-name');
const authorProfessionInput = document.querySelector('#popup-profession');
const elementTitleInput = document.querySelector('#popup-title');
const elementImageInput = document.querySelector('#popup-url');

//находим и обьявляем картинку в имг попапе
export const popupImgImage = document.querySelector('.popup-img__image');
//находим и обьявляем заголовок в имг попапе
export const popupImgTitle = document.querySelector('.popup-img__title');




// добавляем названия и адреса изначальных карточек
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];






function clearPopupValidationError(form) {
    const formInputsLocal = Array.from(form.querySelectorAll('.popup__input'));
    formInputsLocal.forEach((input) => {
        input.classList.remove('popup__input_type_error');
    });
    const popupSpanErrorsLocal = Array.from(form.querySelectorAll('.popup__error'));
    popupSpanErrorsLocal.forEach((span) => {
        span.classList.remove('popup__error_visible');
        span.textContent = '';
    });
    if (form === editForm) {
        popupSubmitButton.classList.remove('popub__submit-button_disabled');
    }
    else if (form === addform) {
        popupAddSubmitButton.classList.add('popub__submit-button_disabled');
        popupAddSubmitButton.setAttribute('disabled', 'true');
        elementTitleInput.value = '';
        elementImageInput.value = '';
    }
}

function removePopupEventListeners() {
    document.removeEventListener('mousedovn', closePopupClickAnywhere);
    document.removeEventListener('keydown', closePopupEscButton);
}


function closePopup(elem) {
    elem.classList.remove('popup_type_opened');
    
    if (elem === popup) {
        clearPopupValidationError(editForm);
    }
    else if (elem === popupAdd) {
        clearPopupValidationError(addform);
    }
}


//функция закрытия попапа по нажатию эск
function closePopupEscButton(evt) {
    if (evt.key === 'Escape') {
    closePopup (popup);
    closePopup(popupAdd);
    closePopup(popupImg);
    removePopupEventListeners();
    }
}

//функция закрытия попапа по нажатию не на попап
function closePopupClickAnywhere(evt) {
    if (evt.target === popup || evt.target === closeButton) {
        closePopup (popup); 
        removePopupEventListeners();
    }
    else if (evt.target === popupImg || evt.target === closeImgButton) {
        closePopup(popupImg);
        removePopupEventListeners();
    }
    else if (evt.target === popupAdd || evt.target === closeAddButton) {
        closePopup(popupAdd);
        removePopupEventListeners();
    }
}



export function openPopup(elem) {
    elem.classList.add('popup_type_opened');
    document.addEventListener('keydown', closePopupEscButton);
    elem.addEventListener('click', closePopupClickAnywhere);
}














//функция изменения имени и профессии по странице.
function editAuthor (evt) {
    evt.preventDefault();
    currentName.textContent = authorNameInput.value;
    currentProfession.textContent = authorProfessionInput.value;
    closePopup(popup);
}


//функция получения имени и профессии из попапа эдит
function takeNewAuthor () {
    authorNameInput.value = currentName.textContent;
    authorProfessionInput.value = currentProfession.textContent;
    openPopup(popup);
}

//функция создания новой карточки и добавления ее на страницу
function renderUserAddedCard(data) {
    const card = new Card(data, '#element');
    const cardElement = card.generateCard();
    document.querySelector('.elements').prepend(cardElement);
}

//функция добавления элемента на страницу из попапа имг
function addNewElement (evt) {
    evt.preventDefault();
    const userData = {
        name: elementTitleInput.value,
        link: elementImageInput.value
    };

    renderUserAddedCard(userData);
    //elementsContainer.prepend(newElement);
    elementTitleInput.value = '';
    elementImageInput.value = '';

    closePopup(popupAdd);
    popupAddSubmitButton.classList.add('popub__submit-button_disabled');
}




//добавляем слушатель событий на кнопку эдит автор
popubEditButton.addEventListener('click', takeNewAuthor);

//добавляем слушатель событий на кнопку добавить элемент
popubAddButton.addEventListener('click', () => {
    openPopup(popupAdd);
});



//Добавляем слушатель событий на форму эдит
editForm.addEventListener('submit', editAuthor);

//Добавляем слушатель событий на форму адд
addform.addEventListener('submit', addNewElement);



initialCards.forEach((item) => {
    const card = new Card(item, '#element');
    const cardElement = card.generateCard();
  
    // Добавляем в DOM
    document.querySelector('.elements').append(cardElement);
  });




function startValidation(object) {
    const formsList = Array.from(document.querySelectorAll(object.formSelector));
    formsList.forEach((formElement) => {
    new FormValidator(object, formElement).enableValidation();
    });
}

startValidation(formPopupRules);


    // const elementPhoto = document.querySelector('.elements');
    // elementPhoto.addEventListener('click', (evt) => {
    //     if (evt.target.classList.contains('element__photo')) {
    //         openPopup(popupImg);
    //         const tgt = evt.target;
    //         popupImgTitle.textContent = tgt.closest('div').querySelector('.element__title').textContent;
    //         popupImgImage.src = tgt.closest('div').querySelector('.element__photo').src;
    //         popupImgImage.setAttribute.alt = tgt.closest('div').querySelector('.element__title').textContent;
    //     }
    // });


