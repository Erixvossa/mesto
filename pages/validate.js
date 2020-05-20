




const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add('.popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('.popup__error_visible');
};
  
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('.popup__input_type_error');
    errorElement.classList.remove('.popup__error_visible');
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
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};
  

//Из тренажера, подозреваю нужно удалить.
const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
  
      fieldsetList.forEach((fieldSet) => {
    setEventListeners(fieldSet);
  });
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
        buttonElement.classList.add('.popup__button_disabled');
    } else {
        buttonElement.classList.remove('.popup__button_disabled');
    }
}




// включение валидации вызовом enableValidation
// все настройки передаются при вызове
//Это написано в задании

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  });


//Как понимаю я?
//Создаем 2 объекта с настройками для валидации, их надо передавать при открытии окна в некую мастер функцию enableValidation()

const formPopupRules = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popub__submit-button',
    inactiveButtonClass: 'popub__submit-button_disabled',
    inputErrorClass: 'popup__error',
    errorClass: 'popup__error_visible'
};

const formAddPopupRules = {
    formSelector: '.popup-add__container',
    inputSelector: '.popup-add__input',
    submitButtonSelector: '.popub-add__submit-button',
    inactiveButtonClass: 'popub-add__submit-button_disabled',
    inputErrorClass: 'popup-add__error',
    errorClass: 'popup-add__error_visible'
};