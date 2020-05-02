//Находим и обьявляем в popup .popup
const popup = document.querySelector('.popup');
//Находим кнопку эдит автора
const popubEditButton = document.querySelector('.profilee-info__edit-button');
//находим кнопку добавить карточку element
const addElementButton = document.querySelector('.profile__add-button');



// находим и обьявляем кнопку закрытия попапа
const closeButton = document.querySelector('.popub__button-close');

//находим и обьявляем заголовок попапа
const profileTitle = document.querySelector('.popup__title');



// находим и обьявляем первое поле ввода в попапе
const firstInput = document.querySelector('.popup__input_type_name');

let firstInputValue = firstInput.value;

//находим и обьявляем плейсхолдер первого поля. Почему-то не работает.
//let firstInputPlaceholder = firstInput.placeholder;
//Находим и обьявляем текущее значение Имени автора
let currentName = document.querySelector('.profilee-info__title').textContent;
//находим и обьявляем введенный по умолчанию текст первого поля
//let firstInputDefault = currentName;


// находим и обьявляем второе поле ввода в попапе
const secondInput = document.querySelector('.popup__input_type_subname');
//Находим и обьявляем текущее значение профессии автора
let currentSubname = document.querySelector('.profilee-info__subtitle').textContent;

//находим и обьявляем плейсхолдер второго поля
//let secondInputPlaceholder = secondInput.placeholder;
//находим и обьявляем введенный по умолчанию текст второго поля
//let secondInputDefault = secondInput.value;

//находим и обьявляем кнопку сабмит в попапе
const submitButton = document.querySelector('.popub__submit-button');
//Находим и обьявляем текстовое наполнение кнопки сабмит. Тоже почему-то не работает внутри функции
//let submitButtonText = submitButton.textContent;

//Находим и обьявляем текущее значение Профессии автора
//let currentProfession = document.querySelector('.profilee-info__subtitle').textContent;

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

function check () {
    console.log('checked');
}


// слушатеь событий на открытие попапа эдит автор
popubEditButton.addEventListener('click', editInfo);

// слушатеь событий на открытие попапа создать элемент
addElementButton.addEventListener('click', addElement);


function editInfo () {
    check ();
    openClosePopup ();
    profileTitle.textContent = 'Редактировать профиль';
    firstInput.placeholder = 'Имя';
    firstInput.value = currentName;
    secondInput.placeholder = 'Профессия';
    secondInput.value = currentSubname;
    submitButton.textContent = 'Сохранить';
}




function addElement () {
    openClosePopup ();
    profileTitle.textContent = 'Создать место';
    firstInput.placeholder = 'Название места';
    firstInputValue = '';
    secondInput.placeholder = 'URL';
    secondInput.value = '';
    submitButton.textContent = 'Создать';
    formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
        //createElement (firstInput.value, secondInput.value);
        openClosePopup ();
    });
}




closeButton.addEventListener('click', openClosePopup);

//находим поле инпут_нейм, назначаем переменной popupInputName
//let popupInputName = document.querySelector('.popup__input_type_name');

//находим поле инпут_сабнейм, назначаем переменной popupInputSubname
//let popupInputSubname = document.querySelector('.popup__input_type_subname');





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







