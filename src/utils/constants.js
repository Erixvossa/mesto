//находим и обьявляем картинку в имг попапе
export const popupImgImage = document.querySelector('.popup-img__image');
//находим и обьявляем заголовок в имг попапе
export const popupImgTitle = document.querySelector('.popup-img__title');

//создаем настроечный объект
export const formPopupRules = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popub__submit-button',
    inactiveButtonClass: 'popub__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

//Находим и обьявляем попап с профилем
export const popup = document.querySelector('#popup-edit');
export const popupSubmitButton = popup.querySelector('.popub__submit-button');

//Находим и обьявляем попап с добавлением элемента
export const popupAdd = document.querySelector('#popup-add');
export const popupAddSubmitButton = popupAdd.querySelector('.popub__submit-button');


//Находим и обьявляем в popupImg .popup-img
export const popupImg = document.querySelector('#popup-img');

//Находим кнопку эдит автора
export const popubEditButton = document.querySelector('.profilee-info__edit-button');

//находим кнопку добавить карточку element
export const popubAddButton = document.querySelector('.profile__add-button');

// находим и обьявляем кнопку закрытия попапа
export const closeButton = document.querySelector('.popub__button-close');

// находим и обьявляем кнопку закрытия попапа с добавлением
export const closeAddButton = document.querySelector('#popub-add__button-close');

// находим и обьявляем кнопку закрытия попапа-img
export const closeImgButton = document.querySelector('.popup-img__button-close');

//находим и обьявляем формы попапов
export const editForm = document.querySelector('#popup__container');
export const addForm = document.querySelector('#popup-add__container');



//находим и обьявляем размещенные на странице имя и профессию
export const currentName = document.querySelector('.profilee-info__title');
export const currentProfession = document.querySelector('.profilee-info__subtitle');

//находим и обьявляем поля вводов попапов
export const authorNameInput = document.querySelector('#popup-name');
export const authorProfessionInput = document.querySelector('#popup-profession');
export const elementTitleInput = document.querySelector('#popup-title');
export const elementImageInput = document.querySelector('#popup-url');

export const templateElement = '#element';
export const targetElements = '.elements';

// добавляем названия и адреса изначальных карточек
export const initialCards = [
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


