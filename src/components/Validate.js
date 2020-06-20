



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
        });
    };
  
  

    _toggleSubmit = (inputList, buttonElement) => {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.setAttribute('disabled', 'true');
        } else {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.removeAttribute('disabled');
        }
    };
  
    //добавляем слушатели
    _setEventListeners = () => {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);

        //this._toggleSubmit(inputList, buttonElement);

        inputList.forEach((formInput) => {
            formInput.addEventListener('input', () => {
            this._checkValidity(formInput);
            this._toggleSubmit(inputList, buttonElement);
            });
        });
    };



    clearPopupValidationError() {
        const formInputsLocal = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        formInputsLocal.forEach((input) => {
          input.classList.remove(this._inputErrorClass);
        });
        const popupSpanErrorsLocal = Array.from(this._formElement.querySelectorAll('.popup__error'));
        popupSpanErrorsLocal.forEach((span) => {
          span.classList.remove(this._errorClass);
          span.textContent = '';
        });
        
        // const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        // const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        // this._toggleSubmit(inputList, buttonElement);
        
        console.log('validation');
    }





  
    //запускаем валидацию
    enableValidation = () => {
        this._setEventListeners(this._formElement);
    };



}

