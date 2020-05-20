//находим и обьявляем, куда будут добавляться элементы
const elementsContainer = document.querySelector('.elements');

//Находим и обьявляем попап с профилем
const popup = document.querySelector('.popup');
const popupTitle = popup.querySelector('.popup__title');
const popupSubmitButton = popup.querySelector('.popub__submit-button');

//Находим и обьявляем попап с добавлением элемента
const popupAdd = document.querySelector('.popup-add');
const popupAddTitle = popupAdd.querySelector('.popup-add__title');
const popupAddSubmitButton = popupAdd.querySelector('.popub-add__submit-button');


//Находим и обьявляем в popupImg .popup-img
const popupImg = document.querySelector('.popup-img');

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
const editForm = document.querySelector('.popup__container');
const addform = document.querySelector('.popup-add__container');



//находим и обьявляем размещенные на странице имя и профессию
const currentName = document.querySelector('.profilee-info__title');
const currentProfession = document.querySelector('.profilee-info__subtitle');

//находим и обьявляем поля вводов попапов
const authorNameInput = document.querySelector('.popup__input_type_name');
const authorProfessionInput = document.querySelector('.popup__input_type_subname');
const elementTitleInput = document.querySelector('.popup-add__input_type_name');
const elementImageInput = document.querySelector('.popup-add__input_type_url');

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






//функция закрытия попапа по нажатию эск
function escClosePopup(evt) {
    if (evt.key === 'Escape') {
    console.log('esc');
    openClosePopup ();
    }
}

//функция закрытия попапа по нажатию не на попап
function popupClickAnywhereClose(evt) {
    if (evt.target !== editForm && evt.target !== authorNameInput && evt.target !== authorProfessionInput && evt.target !== popupTitle && evt.target !== popupSubmitButton || evt.target === closeButton) {
    //console.log('клик мимо');
    //console.log(!evt.target.closest('.popup'));
    openClosePopup (); 
    }
};


// Функция открытия/закрытия попапа в зависимости от наличия класса popup_type_opened
function openClosePopup () {
    if (popup.classList.contains('popup_type_opened')) {
        popup.classList.remove('popup_type_opened');
        //снятие слушателя событий на закрытие попапа кликом мимо
        document.removeEventListener('click', popupClickAnywhereClose);
        //снятие слушателя событий на закрытие попапап кнопкой эск
        document.removeEventListener('keydown', escClosePopup);
        disableValidation();
    }
    else {
        popup.classList.add('popup_type_opened');
        //слушатель событий на закрытие попапа кнопкой эск
        document.addEventListener('keydown', escClosePopup);
        popup.addEventListener('click', popupClickAnywhereClose);
        enableValidation();
    }
}


//функция закрытия попапа по нажатию эск аддпопапа
function escAddClosePopup(evt) {
    if (evt.key === 'Escape') {
    console.log('esc');
    openCloseAddPopup ();
    }
}

//функция закрытия попапа по нажатию не на попап адд попапа
function popupAddClickAnywhereClose(evt) {
    if (evt.target !== addform && evt.target !== elementTitleInput && evt.target !== elementImageInput && evt.target !== popupAddTitle && evt.target !== popupAddSubmitButton || evt.target === closeAddButton) {
    console.log('click mimo');
    openCloseAddPopup (); 
    }
};



// Функция открытия/закрытия попапа c добавлением элемента адд
function openCloseAddPopup () {
    if (popupAdd.classList.contains('popup-add_type_opened')) {
        popupAdd.classList.remove('popup-add_type_opened');
        //снятие слушателя событий на закрытие попапаадд кликом мимо
        document.removeEventListener('click', popupAddClickAnywhereClose);
        //снятие слушателя событий на закрытие попапаадд кнопкой эск
        document.removeEventListener('keydown', escAddClosePopup);
    }
    else {
        popupAdd.classList.add('popup-add_type_opened');
        document.addEventListener('keydown', escAddClosePopup);
        popupAdd.addEventListener('click', popupAddClickAnywhereClose);
    }
}



//функция закрытия попапа по нажатию эск имг попапа
function escImgClosePopup(evt) {
    if (evt.key === 'Escape') {
    console.log('esc');
    openCloseImgPopup ();
    }
}

//функция закрытия попапа по нажатию не на попап имг попапа
function popupImgClickAnywhereClose(evt) {
    if (evt.target !== popupImgImage && evt.target !== popupImgTitle || evt.target === closeImgButton) {
    console.log('click mimo');
    openCloseImgPopup (); 
    }
};


// Функция открытия/закрытия попапа-img в зависимости от наличия класса popup_type_opened
function openCloseImgPopup () {
    if (popupImg.classList.contains('popup-img_type_opened')) {
        popupImg.classList.remove('popup-img_type_opened');
        //снятие слушателя событий на закрытие попапаimg кликом мимо
        document.removeEventListener('click', popupImgClickAnywhereClose);
        //снятие слушателя событий на закрытие попапаimg кнопкой эск
        document.removeEventListener('keydown', escImgClosePopup);        
    }
    else {
        popupImg.classList.add('popup-img_type_opened');
        document.addEventListener('keydown', escImgClosePopup);
        popupImg.addEventListener('click', popupImgClickAnywhereClose);
    }
}



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
        openCloseImgPopup ();
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
    openClosePopup();
}


//функция получения имени и профессии из попапа эдит
function takeNewAuthor () {
    openClosePopup();
    authorNameInput.value = currentName.textContent;
    authorProfessionInput.value = currentProfession.textContent;
}

//функция добавления элемента на страницу из попапа имг
function addNewElement (evt) {
    evt.preventDefault();
    const newElement = createElement(elementTitleInput.value, elementImageInput.value);
    elementsContainer.prepend(newElement);
    elementTitleInput.value = '';
    elementImageInput.value = '';
    openCloseAddPopup();
}


initialCards.forEach(element => {
    elementsContainer.append(createElement(element.name, element.link));
});


//добавляем слушатель событий на кнопку эдит автор
popubEditButton.addEventListener('click', takeNewAuthor);

//добавляем слушатель событий на кнопку добавить элемент
popubAddButton.addEventListener('click', openCloseAddPopup);

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








