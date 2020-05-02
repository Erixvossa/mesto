//Находим и обьявляем в popup .popup
const popup = document.querySelector('.popup');
//Находим кнопку эдит автора
const popubEditButton = document.querySelector('.profilee-info__edit-button');
//находим кнопку добавить карточку element
const addElementButton = document.querySelector('.profile__add-button');

//Старая кнопка закрыть const closeButton = document.querySelector('.popub__button-close');









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



function createPopup () {
    // находим и назначаем переменной шаблон
    const elementPopup = document.querySelector('#popup').content;

    // находим и назначем переменной контейнер, куда будем вставлять шаблон
    const popupContainer = document.querySelector('.page');

    // называем переменную для клонирования шаблона
    const popupShow = elementPopup.cloneNode(true);
    
    // добавляем  пермеменную-скопированный шаблон в переменную контейнер в DOM
    popupContainer.append(popupShow);









    //находим кнопку закрыть попап
    const closeButton = document.querySelector('.popub__button-close');
    
    //находим ближайшую карточку element к кнопке recycle
    const currentPopupClose = closeButton.closest('.popup');
    
    //создаем слушатель событий на кнопку closeButton, который будет удалять popup
    closeButton.addEventListener('click', function () {
        currentPopupClose.remove();
    })
}



function editAuthor () {
    createPopup ();
    //находим и обьявляем заголовок попапа
let profileTitle = document.querySelector('.popup__title').textContent;

// находим и обьявляем первое поле ввода в попапе
const firstInput = document.querySelector('.popup__input_type_name');
//находим и обьявляем плейсхолдер первого поля
let firstInputPlaceholder = firstInput.getAttribute('placeholder');
//находим и обьявляем введенный по умолчанию текст первого поля
let firstInputDefault = firstInput.value;

// находим и обьявляем второе поле ввода в попапе
const secondInput = document.querySelector('.popup__input_type_subname');
//находим и обьявляем плейсхолдер второго поля
let secondInputPlaceholder = secondInput.placeholder;
//находим и обьявляем введенный по умолчанию текст второго поля
let secondInputDefault = secondInput.value;

//находим и обьявляем кнопку сабмит в попапе
const submitButton = document.querySelector('.popub__submit-button');
//Находим и обьявляем текстовое наполнение кнопки сабмит
let submitButtonTetx = submitButton.textContent;

//Находим и обьявляем текущее значение Имени автора
let currentName = document.querySelector('.profilee-info__title').textContent;
//Находим и обьявляем текущее значение Профессии автора
let currentProfession = document.querySelector('.profilee-info__subtitle').textContent;

    profileTitle = 'Редактировать профиль';
    firstInputPlaceholder = 'Имя';
    secondInputPlaceholder = 'Профессия';
    submitButtonTetx = 'Сохранить';
    firstInputDefault = currentName;
}

popubEditButton.addEventListener('click', editAuthor);
