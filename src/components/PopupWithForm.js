import Popup from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormHandler, validationForm, handleOpen = () => {}) {
    super(popupSelector);
    this._submitFormHandler = submitFormHandler;
    this._validationForm = validationForm;
    this._handleOpen = handleOpen;
    this._submitButton = this._popup.querySelector('.popup__submit-button');
  }


  popupClose() {
    super.popupClose();
    this._form.reset();
  }


  popupOpen() {
    this._validationForm.clearErrors();
    this._handleOpen();
    super.popupOpen();
  }


  _setEventListeners() {
    super._setEventListeners();
    this._form = this._popup.querySelector('.popup__container');
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitFormHandler(this._getInputValues());
      this._submitButton.textContent = 'Сохраняем';
    });
  }


  _getInputValues() {
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }
}