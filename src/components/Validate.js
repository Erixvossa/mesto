

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


  _showInputError(formInput) {
    formInput.classList.add(this._inputErrorClass);
    const errorElement = this._formElement.querySelector(`#${formInput.id}-error`);
    errorElement.textContent = formInput.validationMessage;
    errorElement.classList.add(this._errorClass);
  }


  _hideInputError(formInput) {
    formInput.classList.remove(this._inputErrorClass);
    const errorElement = this._formElement.querySelector(`#${formInput.id}-error`);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  }


  _checkInputValidity(formInput) {
    if (!formInput.validity.valid) {
      this._showInputError(formInput);
    } else {
      this._hideInputError(formInput);
    }
  }


  _hasInvalidInput() {
    return this._inputList.some(formInput => !formInput.validity.valid);
  }


  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._button.classList.add(this._inactiveButtonClass);
      this._button.setAttribute('disabled', true);
    } else {
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.removeAttribute('disabled');
    }
  }


  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._button = this._formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState();
    this._inputList.forEach(formInput => {
      formInput.addEventListener('input', () => {
        this._checkInputValidity(formInput);
        this._toggleButtonState();
      });
    });
  }


  clearErrors() {
    this._inputList.forEach(formInput => {
      if (formInput.classList.contains(this._inputErrorClass)) {
        this._hideInputError(formInput);
      }
    });
    this._toggleButtonState(this._inputList, this._button);
  }


  enableValidation() {
    this._setEventListeners();
  }
}

