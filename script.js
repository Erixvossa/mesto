let popup = document.querySelector('.popup');
let popubButton = document.querySelector('.profile-info__edit-button');
let closeButton = document.querySelector('.popub__button-close');



popubButton.addEventListener('click', function () {
    popup.classList.add('popup_opened');
    let popupName = document.querySelector('.popup__name');
    popupName.value = pageNameValue;
    document.querySelector('.popup__subname').value = document.querySelector('.profile-info__subtitle').textContent;
});

closeButton.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
});

let profileInfoTitle = document.querySelector('.profile-info__title');

let pageNameValue = profileInfoTitle.textContent;




// Находим форму в DOM
let formElement = document.querySelector('form');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let nameInput = formElement.querySelector('.popup__name').value;
    let jobInput = formElement.querySelector('.popup__subname').value;

    // Получите значение полей из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent

    document.querySelector('.profile-info__title').textContent = nameInput;
    document.querySelector('.profile-info__subtitle').textContent = jobInput;
    popup.classList.remove('popup_opened');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);