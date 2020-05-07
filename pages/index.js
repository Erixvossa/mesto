//находим и обьявляем, куда будут добавляться элементы
const elementsContainer = document.querySelector('.elements');

//Находим и обьявляем попап с профилем
const popup = document.querySelector('.popup');

//Находим и обьявляем попап с добавлением элемента
const popupAdd = document.querySelector('.popup-add');

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



// Функция открытия/закрытия попапа в зависимости от наличия класса popup_type_opened
function openClosePopup () {
    if (popup.classList.contains('popup_type_opened')) {
        popup.classList.remove('popup_type_opened');
    }
    else {
        popup.classList.add('popup_type_opened');
    }
}

// Функция открытия/закрытия попапа c добавлением элемента 
function openCloseAddPopup () {
    if (popupAdd.classList.contains('popup-add_type_opened')) {
        popupAdd.classList.remove('popup-add_type_opened');
    }
    else {
        popupAdd.classList.add('popup-add_type_opened');
    }
}

// Функция открытия/закрытия попапа-img в зависимости от наличия класса popup_type_opened
function openCloseImgPopup () {
    if (popupImg.classList.contains('popup-img_type_opened')) {
        popupImg.classList.remove('popup-img_type_opened');
    }
    else {
        popupImg.classList.add('popup-img_type_opened');
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
closeButton.addEventListener('click', openClosePopup);

//добавляем слушатель событий на кнопку закрыть попап добавить элемент
closeAddButton.addEventListener('click', openCloseAddPopup);

//Добавляем слушатель событий на форму эдит
editForm.addEventListener('submit', editAuthor);

//Добавляем слушатель событий на форму адд
addform.addEventListener('submit', addNewElement);

//слушатель событий на закрытие img-попапа
closeImgButton.addEventListener('click', openCloseImgPopup);



