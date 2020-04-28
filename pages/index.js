const popup = document.querySelector('.popup');
const popubButton = document.querySelector('.profilee-info__edit-button');
const closeButton = document.querySelector('.popub__button-close');
let profileInfoTitle = document.querySelector('.profilee-info__title');

// Находим форму в DOM
let formElement = document.querySelector('form');


// Функция открытия попапа без условий
//function openPopup () {
//    popup.classList.add('popup_type_opened');
//    document.querySelector('.popup__input_type_name').value = document.querySelector('.profilee-info__title').textContent;
//    document.querySelector('.popup__input_type_subname').value = document.querySelector('.profilee-info__subtitle').textContent;
//}

// Функция закрытия попапа без условий
//function closePopup () {
//    popup.classList.remove('popup_type_opened');
//}


// Функция открытия/закрытия попапа в зависимости от наличия класса popup_type_opened
function openClosePopup () {
    if (popup.classList.contains('popup_type_opened')) {
        popup.classList.remove('popup_type_opened');
    }
    else {
        popup.classList.add('popup_type_opened');
        document.querySelector('.popup__input_type_name').value = document.querySelector('.profilee-info__title').textContent;
        document.querySelector('.popup__input_type_subname').value = document.querySelector('.profilee-info__subtitle').textContent;
    }
}


popubButton.addEventListener('click', openClosePopup);

closeButton.addEventListener('click', openClosePopup);




// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let nameInput = formElement.querySelector('.popup__input_type_name').value;
    let jobInput = formElement.querySelector('.popup__input_type_subname').value;

    // Получите значение полей из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent

    document.querySelector('.profilee-info__title').textContent = nameInput;
    document.querySelector('.profilee-info__subtitle').textContent = jobInput;
    openClosePopup ();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);


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






function createElement (elementTitle, elementLink) {
    const elementTemplate = document.querySelector('#element').content;
    const elementsContainer = document.querySelector('.elements');
    const elementShow = elementTemplate.cloneNode(true);
    
    elementShow.querySelector('.element__title').textContent = elementTitle;
    elementShow.querySelector('.element__photo').src = elementLink;

    elementsContainer.append(elementShow);
}


for (let i = 0; i < initialCards.length; i++ ) {
    let elementTitleCounter = initialCards[i].name;
    let elementSrcCounter = initialCards[i].link;
    createElement (initialCards[i].name, initialCards[i].link);
}

createElement('москва', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg');
