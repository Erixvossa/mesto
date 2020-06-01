
//создаем настроечный объект
const formPopupRules = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popub__submit-button',
    inactiveButtonClass: 'popub__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};


export class FormValidator {
    constructor(object, formElement) {
        this._formSelector = object.formSelector;
        this._inputSelector = object.inputSelector;
        this._submitButtonSelector = object.submitButtonSelector;
        this._inactiveButtonClass = object.inactiveButtonClass;
        this._inputErrorClass = object.inputErrorClass;
        this._errorClass = object.errorClass;
        this._formElement = formElement;
    }


//показываем ошибку по id
    _showInputError = (formInput, errorMessage) => {
        const errorElement = this._formElement.querySelector(`#${formInput.id}-error`);
        formInput.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };
  
  
//удаляем ошибку
    _hideInputError = (formInput) => {
        const errorElement = this._formElement.querySelector(`#${formInput.id}-error`);
        formInput.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };
  
  
    //проверяем валидность формы
    _checkValidity = (formInput) => {
        if (!formInput.validity.valid) {
        this._showInputError(formInput, formInput.validationMessage);
        } else {
        this._hideInputError(formInput,);
        }
    };
  
  
_hasInvalidInput = (inputList) => {
    return inputList.some((formInput) => {
        return !formInput.validity.valid;
    })
};
  
  
//состояние кнопки
//здесь и в остальных местах добавил отключение кнопки через атрибут, тк через энтер позволял отправить в обход выключенной кнопки
_toggleSubmit = (inputList, buttonElement) => {
    if (_hasInvalidInput(inputList)) {
        buttonElement.classList.add(this._inactiveButtonClass);
        buttonElement.setAttribute('disabled', 'true');
    } else {
        buttonElement.classList.remove(this._inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
};
  
//добавляем слушатели
_setEventListeners = (form) => {
    const inputList = Array.from(form.querySelectorAll(this._inputSelector));
    const buttonElement = form.querySelector(this._submitButtonSelector);
    //toggleSubmit(inputList, buttonElement, validationRules);
    inputList.forEach((formInput) => {
        formInput.addEventListener('input', function () {
        _checkValidity(formInput);
        _toggleSubmit(inputList, buttonElement);
        });
    });
};
  
//запускаем валидацию
enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(this._formSelector));
    formList.forEach((form) => {
        _setEventListeners(form);
    });
};



}

function startValidation(object) {
    const formList = Array.from(document.querySelectorAll(object.formSelector));
    forms.forEach((form) => {
        new FormValidator(object, formElement).enableValidation();
    });
}

startValidation(formPopupRules);