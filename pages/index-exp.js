//Находим и обьявляем в popup .popup
const popup = document.querySelector('.popup');
const popubButton = document.querySelector('.profilee-info__edit-button');
const closeButton = document.querySelector('.popub__button-close');
let profileInfoTitle = document.querySelector('.profilee-info__title');

//находим поле инпут_нейм, назначаем переменной popupInputName
let popupInputName = document.querySelector('.popup__input_type_name');

//находим поле инпут_сабнейм, назначаем переменной popupInputSubname
let popupInputSubname = document.querySelector('.popup__input_type_subname');


// Находим форму в DOM
let formElement = document.querySelector('form');


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
    //evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
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
//formElement.addEventListener('submit', formSubmitHandler);




function createElement (elementTitle, elementLink) {
    const elementTemplate = document.querySelector('#element').content;
    const elementsContainer = document.querySelector('.elements');
    const elementShow = elementTemplate.cloneNode(true);
    

    elementShow.querySelector('.element__title').textContent = elementTitle;
    elementShow.querySelector('.element__photo').src = elementLink;

    elementsContainer.prepend(elementShow);

    //находим кнопку like
    const likeButton = document.querySelector('.element__like');

    likeButton.addEventListener('click', function (evt) {
        // в переменной eventTarget окажется элемент
        // button, на который мы кликнули
    
        const eventTarget = evt.target;
        eventTarget.classList.toggle('element__like_set');
    });


    //находим кнопку recycle
    const recycleButton = document.querySelector('.element__recycle');
    //находим ближайшую карточку element к кнопке recycle
    const currentElementRecycle = recycleButton.closest('.element');

    //создаем слушатель событий на кнопку recycleButton, который будет удалять currentElementRecycle
    recycleButton.addEventListener('click', function (evt) {
        const currentElement = evt.target;
        currentElementRecycle.remove();
    })

}


// цикл создает 6 изначальных карточек

for (let i = initialCards.length - 1; i >= 0; i--) {
    let elementTitleCounter = initialCards[i].name;
    let elementSrcCounter = initialCards[i].link;
    createElement (initialCards[i].name, initialCards[i].link);
}

    createElement('москва', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg');


//находим кнопку добавить карточку element
const addElementButton = document.querySelector('.profile__add-button');

addElementButton.addEventListener('click', openCloseAddElement);

function openCloseAddElement () {
    document.querySelector('.popup__title').textContent = 'Новое место';
    document.querySelector('.popub__submit-button').textContent = 'Создать место';
    if (popup.classList.contains('popup_type_opened')) {
        popup.classList.remove('popup_type_opened');
    }
    else {
        popup.classList.add('popup_type_opened');
        popupInputName.placeholder = "Название";
        popupInputName.value = '';
        popupInputSubname.placeholder = "Ссылка на картинку";
        popupInputSubname.value = '';
        popupType = 'addElement'; // экспериментальная часть
    }
}

function addElementHandler () {

    // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let nameInput = formElement.querySelector('.popup__input_type_name').value;
    let urlInput = formElement.querySelector('.popup__input_type_subname').value;
    // Получите значение полей из свойства value

    createElement(nameInput, urlInput);
    openCloseAddElement ();
}


formElement.addEventListener('submit', function(evt) {
    evt.preventDefault(); 
    if (document.querySelector('.popub__submit-button').textContent = 'Создать место') {
        console.log('новое место');
        addElementHandler ();
    }
    else {
        formSubmitHandler ();
    }
});
