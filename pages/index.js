//находим и обьявляем, куда будут добавляться элементы
const elementsContainer = document.querySelector('.elements');

//Находим и обьявляем попап с профилем
const popupCommon = document.querySelector('.popup')
const popup = document.querySelector('#popup-edit');
const popupTitle = popup.querySelector('.popup__title');
const popupSubmitButton = popup.querySelector('.popub__submit-button');

//Находим и обьявляем попап с добавлением элемента
const popupAdd = document.querySelector('#popup-add');
const popupAddTitle = popupAdd.querySelector('.popup__title');
const popupAddSubmitButton = popupAdd.querySelector('.popub__submit-button');


//Находим и обьявляем в popupImg .popup-img
const popupImg = document.querySelector('#popup-img');

//Находим кнопку эдит автора
const popubEditButton = document.querySelector('.profilee-info__edit-button');

//находим кнопку добавить карточку element
const popubAddButton = document.querySelector('.profile__add-button');

// находим и обьявляем кнопку закрытия попапа
const closeButton = document.querySelector('.popub__button-close');

// находим и обьявляем кнопку закрытия попапа с добавлением
const closeAddButton = document.querySelector('.popub-add__button-close');

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
const popupImgImage = document.querySelector('.popup-img__image');
//находим и обьявляем заголовок в имг попапе
const popupImgTitle = document.querySelector('.popup-img__title');




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


//массив всех полей попап
const formInput = Array.from(document.querySelectorAll('.popup__input'));
//массив всех спан ошибок попапа
const popupSpanError = Array.from(document.querySelectorAll('.popup__error'));



//очистка ошибок валидации попапа
//function clearPopupValidationError() {
//    formInput.forEach((input) => {
//        input.classList.remove('popup__input_type_error');
//    })
//    popupSpanError.forEach((span) => {
//        span.classList.remove('popup__error_visible');
//        span.textContent = '';
//    });
//    popupSubmitButton.classList.remove('popub__submit-button_disabled');
//};

function clearPopupValidationError(form) {
    const formInputLocal = Array.from(form.querySelectorAll('.popup__input'));
    formInputLocal.forEach((input) => {
        input.classList.remove('popup__input_type_error');
    })
    const popupSpanErrorLocal = Array.from(form.querySelectorAll('.popup__error'));
    popupSpanErrorLocal.forEach((span) => {
        span.classList.remove('popup__error_visible');
        span.textContent = '';
    });
    if (form == editForm) {
        popupSubmitButton.classList.remove('popub__submit-button_disabled');
    }
};





//функция закрытия попапа по нажатию эск
function closePopupEscButton(evt) {
    if (evt.key === 'Escape') {
    closePopup (popup);
    }
}

//функция закрытия попапа по нажатию не на попап
function closePopupClickAnywhere(evt) {
    if (evt.target !== editForm && evt.target !== authorNameInput && evt.target !== authorProfessionInput && evt.target !== popupTitle && evt.target !== popupSubmitButton || evt.target === closeButton) {
    closePopup (popup); 
    }
};


// Функция открытия/закрытия попапа в зависимости от наличия класса popup_type_opened
// function openClosePopup () {
//     if (popup.classList.contains('popup_type_opened')) {
//         popup.classList.remove('popup_type_opened');
//         //снятие слушателя событий на закрытие попапа кликом мимо
//         document.removeEventListener('mousedovn', closePopupClickAnywhere);
//         //снятие слушателя событий на закрытие попапап кнопкой эск
//         document.removeEventListener('keydown', closePopupEscButton);
//         clearPopupValidationError(editForm);

//     }
//     else {
//         popup.classList.add('popup_type_opened');
//         //слушатель событий на закрытие попапа кнопкой эск
//         document.addEventListener('keydown', closePopupEscButton);
//         popup.addEventListener('mousedown', closePopupClickAnywhere);
//     }
// }


//функция закрытия попапа по нажатию эск аддпопапа
function closeAddPopupEscButton(evt) {
    if (evt.key === 'Escape') {
    closePopup(popupAdd);
    }
}

//функция закрытия попапа по нажатию не на попап адд попапа
function closePopupAddClickAnywhere(evt) {
    if (evt.target !== addform && evt.target !== elementTitleInput && evt.target !== elementImageInput && evt.target !== popupAddTitle && evt.target !== popupAddSubmitButton || evt.target === closeAddButton) {
    closePopup(popupAdd); 
    }
};



// Функция открытия/закрытия попапа c добавлением элемента адд
// function openCloseAddPopup () {
//     if (popupAdd.classList.contains('popup_type_opened')) {
//         popupAdd.classList.remove('popup_type_opened');
//         //снятие слушателя событий на закрытие попапаадд кликом мимо
//         document.removeEventListener('mousedown', closePopupAddClickAnywhere);
//         //снятие слушателя событий на закрытие попапаадд кнопкой эск
//         document.removeEventListener('keydown', closeAddPopupEscButton);
//         popupAddSubmitButton.classList.add('popub__submit-button_disabled');
//         popupAddSubmitButton.setAttribute('disabled', 'true');
//         clearPopupValidationError(addform);
//     }
//     else {
//         popupAdd.classList.add('popup_type_opened');
//         document.addEventListener('keydown', closeAddPopupEscButton);
//         popupAdd.addEventListener('mousedown', closePopupAddClickAnywhere);
//     }
// }

function openPopup(elem) {
    if (elem === popup) {
        popup.classList.add('popup_type_opened');
        document.addEventListener('keydown', closePopupEscButton);
        popup.addEventListener('mousedown', closePopupClickAnywhere);
    }
    else if (elem === popupAdd) {
        popupAdd.classList.add('popup_type_opened');
        document.addEventListener('keydown', closeAddPopupEscButton);
        popupAdd.addEventListener('mousedown', closePopupAddClickAnywhere);
    }
    else if (elem === popupImg) {
        popupImg.classList.add('popup-img_type_opened');
        document.addEventListener('keydown', closeImgPopupEscButton);
        popupImg.addEventListener('mousedown', closeImgPopupClickAnywhere);
    }
}

function closePopup(elem) {
    if (elem === popup) {
        popup.classList.remove('popup_type_opened');
        //снятие слушателя событий на закрытие попапа кликом мимо
        document.removeEventListener('mousedovn', closePopupClickAnywhere);
        //снятие слушателя событий на закрытие попапап кнопкой эск
        document.removeEventListener('keydown', closePopupEscButton);
        clearPopupValidationError(editForm);
    }
    else if (elem === popupAdd) {
        popupAdd.classList.remove('popup_type_opened');
        //снятие слушателя событий на закрытие попапаадд кликом мимо
        document.removeEventListener('mousedown', closePopupAddClickAnywhere);
        //снятие слушателя событий на закрытие попапаадд кнопкой эск
        document.removeEventListener('keydown', closeAddPopupEscButton);
        popupAddSubmitButton.classList.add('popub__submit-button_disabled');
        popupAddSubmitButton.setAttribute('disabled', 'true');
        clearPopupValidationError(addform);
    }
    else if (elem === popupImg) {
        popupImg.classList.remove('popup-img_type_opened');
        //снятие слушателя событий на закрытие попапаimg кликом мимо
        document.removeEventListener('mousedown', closeImgPopupClickAnywhere);
        //снятие слушателя событий на закрытие попапаimg кнопкой эск
        document.removeEventListener('keydown', closeImgPopupEscButton);
    }
}






//функция закрытия попапа по нажатию эск имг попапа
function closeImgPopupEscButton(evt) {
    if (evt.key === 'Escape') {
    closePopup (popupImg);
    }
}

//функция закрытия попапа по нажатию не на попап имг попапа
function closeImgPopupClickAnywhere(evt) {
    if (evt.target !== popupImgImage && evt.target !== popupImgTitle || evt.target === closeImgButton) {
    closePopup (popupImg); 
    }
};


// Функция открытия/закрытия попапа-img в зависимости от наличия класса popup_type_opened
// function openCloseImgPopup () {
//     if (popupImg.classList.contains('popup-img_type_opened')) {
//         popupImg.classList.remove('popup-img_type_opened');
//         //снятие слушателя событий на закрытие попапаimg кликом мимо
//         document.removeEventListener('mousedown', closeImgPopupClickAnywhere);
//         //снятие слушателя событий на закрытие попапаimg кнопкой эск
//         document.removeEventListener('keydown', closeImgPopupEscButton);        
//     }
//     else {
//         popupImg.classList.add('popup-img_type_opened');
//         document.addEventListener('keydown', closeImgPopupEscButton);
//         popupImg.addEventListener('mousedown', closeImgPopupClickAnywhere);
//     }
// }



//функция создания элемента, принимает на вход 2 значения (имя и ссылка на картинку)
function createElement (elementTitle, elementLink) {
    const elementTemplate = document.querySelector('#element').content;
    const elementShow = elementTemplate.cloneNode(true);
    const elementTitleTemplate = elementShow.querySelector('.element__title');
    const elementPhotoTemplate = elementShow.querySelector('.element__photo');
    //находим кнопку like
    const likeButton = elementShow.querySelector('.element__like');
    //находим кнопку recycle
    const recycleButton = elementShow.querySelector('.element__recycle');
    //находим ближайшую карточку element к кнопке recycle
    const currentElementRecycle = recycleButton.closest('.element');

    elementTitleTemplate.textContent = elementTitle;
    elementPhotoTemplate.src = elementLink;
    elementPhotoTemplate.setAttribute('alt', elementTitle);

    likeButton.addEventListener('click', function (evt) {
        // в переменной eventTarget окажется элемент
        // button, на который мы кликнули
    
        const eventTarget = evt.target;
        eventTarget.classList.toggle('element__like_set');
    });

    //Слушатель событий на создание попапа укрупненного просмотра картинки 
    elementPhotoTemplate.addEventListener('click', function (evt) {
        const currentElement = evt.target;
        openPopup (popupImg);
        popupImgImage.src = elementLink;
        popupImgImage.setAttribute('alt', elementTitle);
        popupImgTitle.textContent = elementTitle;
    });

    //создаем слушатель событий на кнопку recycleButton, который будет удалять currentElementRecycle
    recycleButton.addEventListener('click', function (evt) {
        const currentElement = evt.target;
        currentElementRecycle.remove();
    })
    return elementShow;
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

//функция добавления элемента на страницу из попапа имг
function addNewElement (evt) {
    evt.preventDefault();
    const newElement = createElement(elementTitleInput.value, elementImageInput.value);
    elementsContainer.prepend(newElement);
    elementTitleInput.value = '';
    elementImageInput.value = '';

    closePopup(popupAdd);
    popupAddSubmitButton.classList.add('popub__submit-button_disabled');
}


initialCards.forEach(element => {
    elementsContainer.append(createElement(element.name, element.link));
});


//добавляем слушатель событий на кнопку эдит автор
popubEditButton.addEventListener('click', takeNewAuthor);

//добавляем слушатель событий на кнопку добавить элемент
popubAddButton.addEventListener('click', () => {
    openPopup(popupAdd);
});

//добавляем слушатель событий на кнопку закрыть попап эдит автор
//closeButton.addEventListener('click', openClosePopup);

//добавляем слушатель событий на кнопку закрыть попап добавить элемент
//closeAddButton.addEventListener('click', openCloseAddPopup);

//Добавляем слушатель событий на форму эдит
editForm.addEventListener('submit', editAuthor);

//Добавляем слушатель событий на форму адд
addform.addEventListener('submit', addNewElement);

//слушатель событий на закрытие img-попапа
//closeImgButton.addEventListener('click', openCloseImgPopup);




