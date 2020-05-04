//Находим и обьявляем в popup .popup
const popup = document.querySelector('.popup');

//Находим и обьявляем в popupImg .popup-img
const popupImg = document.querySelector('.popup-img');

//Находим кнопку эдит автора
const popubEditButton = document.querySelector('.profilee-info__edit-button');
//находим кнопку добавить карточку element
const addElementButton = document.querySelector('.profile__add-button');


// находим и обьявляем кнопку закрытия попапа
const closeButton = document.querySelector('.popub__button-close');

// находим и обьявляем кнопку закрытия попапа-img
const closeImgButton = document.querySelector('.popup-img__button-close');

//находим и обьявляем картинку в имг попапе
const popupImgImage = document.querySelector('.popup-img__image');
//находим и обьявляем заголовок в имг попапе
const popupImgTitle = document.querySelector('.popup-img__title');


//находим и обьявляем заголовок попапа
const profileTitle = document.querySelector('.popup__title');


// находим и обьявляем первое поле ввода в попапе
const firstInput = document.querySelector('.popup__input_type_name');

let firstInputValue = firstInput.value;

//Находим и обьявляем текущее значение Имени автора
let currentName = document.querySelector('.profilee-info__title');

// находим и обьявляем второе поле ввода в попапе
const secondInput = document.querySelector('.popup__input_type_subname');
//Находим и обьявляем текущее значение профессии автора
let currentSubname = document.querySelector('.profilee-info__subtitle');


//находим и обьявляем кнопку сабмит в попапе
const submitButton = document.querySelector('.popub__submit-button');

// Находим форму в DOM
const formElement = document.querySelector('form');




// Функция открытия/закрытия попапа в зависимости от наличия класса popup_type_opened
function openClosePopup () {
    if (popup.classList.contains('popup_type_opened')) {
        popup.classList.remove('popup_type_opened');
    }
    else {
        popup.classList.add('popup_type_opened');
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


function removeEventSubmit () {
    formElement.removeEventListener ('submit', addeditInfoEventListener);
    formElement.removeEventListener ('submit', addCreateElementEventLitener);
}




function addeditInfoEventListener () {
    editAuthor (firstInput.value, secondInput.value);
    openClosePopup ();
}

function editInfo () {
    openClosePopup ();
    removeEventSubmit ();
    profileTitle.textContent = 'Редактировать профиль';
    firstInput.placeholder = 'Имя';
    firstInput.value = currentName.textContent;
    secondInput.placeholder = 'Профессия';
    secondInput.value = currentSubname.textContent;
    submitButton.textContent = 'Сохранить';
    formElement.addEventListener('submit', addeditInfoEventListener);
}


function addCreateElementEventLitener(evt) {
    evt.preventDefault();
    createElement (firstInput.value, secondInput.value);
    openClosePopup ();
}



function addElement () {
    openClosePopup ();
    removeEventSubmit ();
    profileTitle.textContent = 'Создать место';
    firstInput.placeholder = 'Название места';
    firstInput.value = '';
    secondInput.placeholder = 'URL';
    secondInput.value = '';
    submitButton.textContent = 'Создать';
    formElement.addEventListener('submit', addCreateElementEventLitener);
}





// слушатеь событий на открытие попапа эдит автор
popubEditButton.addEventListener('click', editInfo);

// слушатеь событий на открытие попапа создать элемент
addElementButton.addEventListener('click', addElement);

//слушатель событий на закрытие img-попапа
closeImgButton.addEventListener('click', openCloseImgPopup);

//слушатель событий на закрытие попапа
closeButton.addEventListener('click', openClosePopup);






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




//функция изменения имени и профессии по странице. принимает 2 значения и заменяет ими текущие.
function editAuthor (firstValue, secondValue) {
    currentName.textContent = firstValue;
    currentSubname.textContent = secondValue;
}



//функция создания элемента, принимает на вход 2 значения (имя и ссылка на картинку)
function createElement (elementTitle, elementLink) {
    const elementTemplate = document.querySelector('#element').content;
    const elementsContainer = document.querySelector('.elements');
    const elementShow = elementTemplate.cloneNode(true);
    const elementTitleTemplate = elementShow.querySelector('.element__title');
    const elementPhotoTemplate = elementShow.querySelector('.element__photo');


    elementTitleTemplate.textContent = elementTitle;
    elementPhotoTemplate.src = elementLink;

    elementsContainer.prepend(elementShow);

    //находим кнопку like
    const likeButton = document.querySelector('.element__like');

    likeButton.addEventListener('click', function (evt) {
        // в переменной eventTarget окажется элемент
        // button, на который мы кликнули
    
        const eventTarget = evt.target;
        eventTarget.classList.toggle('element__like_set');
    });

// Экспериментальная часть про создание попап имг на странице

    elementPhotoTemplate.addEventListener('click', function (evt) {
        const currentElement = evt.target;
        openCloseImgPopup ();
        popupImgImage.src = elementLink;
        popupImgTitle.textContent = elementTitle;
    });








// Экспериментальная часть про создание попап имг на странице

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






