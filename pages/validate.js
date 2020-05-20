
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error'); //нужно передать value из объекта в качестве класса
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__error_visible'); //нужно передать value из объекта в качестве класса
};
  
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error'); //нужно передать value из объекта в качестве класса
    errorElement.classList.remove('popup__error_visible'); //нужно передать value из объекта в качестве класса
    errorElement.textContent = '';
};
  
const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};
  
const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input')); //вэлью из объекта ключ, inputSelector
    const buttonElement = formElement.querySelector('.popub__submit-button'); //вэлью из объекта ключ, submitButtonSelector
    //toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};
  

//Из тренажера, подозреваю нужно удалить.
const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__container'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      setEventListeners(formElement)
    });
};




enableValidation();

  
function hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}
  
function toggleButtonState (inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popub__submit-button_disabled'); //вэлью из объекта ключ, inactiveButtonClass
    } else {
        buttonElement.classList.remove('popub__submit-button_disabled'); //вэлью из объекта ключ, inactiveButtonClass
    }
}
//почему ссылается на переменную из другой функции? область видимости же закрытая, насколько понимаю? (30 строка)
//по логике эта функция должна же еще передавать в кнопку type=disabled?






// включение валидации вызовом enableValidation
// все настройки передаются при вызове
//Это написано в задании

//enableValidation({
  //  formSelector: '.popup__form',
    //inputSelector: '.popup__input',
  //  submitButtonSelector: '.popup__button',
   // inactiveButtonClass: 'popup__button_disabled',
    //inputErrorClass: 'popup__input_type_error',
    //errorClass: 'popup__error_visible'
  //});


//Как понимаю я?
//Создаем 2 объекта с настройками для валидации, их надо передавать при открытии окна в некую мастер функцию enableValidation()

const formPopupRules = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popub__submit-button',
    inactiveButtonClass: 'popub__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

const formAddPopupRules = {
    formSelector: '.popup-add__container',
    inputSelector: '.popup-add__input',
    submitButtonSelector: '.popub-add__submit-button',
    inactiveButtonClass: 'popub-add__submit-button_disabled',
    inputErrorClass: 'popup-add__input_type_error',
    errorClass: 'popup-add__error_visible'
};