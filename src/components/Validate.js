



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




    _showInputError(formImput) {
        const errorElement = this._formElement.querySelector(`#${formImput.id}-error`);
        formImput.classList.add(this._inputErrorClass);
        errorElement.classList.add(this._errorClass);
        errorElement.textContent = formImput.validationMessage;
    }

    _hideInputError(formImput) {
        const errorElement = this._formElement.querySelector(`#${formImput.id}-error`);
        formImput.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    }
    
    _checkInputValidity(formImput) {
        if (!formImput.validity.valid) {
        this._showInputError(formImput);
        } else {
          this._hideInputError(formImput);
        }
    }
    
    _hasInvalidInput() {
        return this._inputList.some(formImput => !formImput.validity.valid);
    }
    
    _toggleButtonState() {
        if (this._hasInvalidInput()) {
        this._button.setAttribute('disabled', true)
        this._button.classList.add(this._inactiveButtonClass);
        } else {
        this._button.removeAttribute('disabled', true);
        this._button.classList.remove(this._inactiveButtonClass);
        }
    }
    
    _setEventListeners() {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));

        this._button = this._formElement.querySelector(this._submitButtonSelector);
        this._toggleButtonState();
        this._inputList.forEach((formImput) => {
          formImput.addEventListener('input', () => {
            this._checkInputValidity(formImput);
            this._toggleButtonState();
          });
        });
    }
    
    errorClear() {
        this._inputList.forEach(input => {
          if (input.classList.contains(this._inputErrorClass)) {
            this._hideInputError(input);
        }
        });
        // if (this._button.id ==='popup-add-button') {
          this._toggleButtonState(this._inputList, this._button);
        // }
    }
    
    enableValidation() {
        this._setEventListeners();
    }
    
}



