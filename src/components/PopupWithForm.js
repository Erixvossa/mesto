import { Popup } from './Popup.js';


export class PopupWithForm extends Popup {
    constructor({ submitFormHandler }, popupId, validationForm, formSelector) {
        super(popupId);
        this._submitFormHandler = submitFormHandler;
        this._form = this._popupId.querySelector(formSelector);
        this._validationForm = validationForm;
        this._handlerSubmitButton = this._handlerSubmitButton.bind(this);
    }

  popupClose() {
    this._form.reset();
      super.popupClose();
    }

  popupOpen() {
    this._validationForm.errorClear();
    super.popupOpen();
  }

  _handlerSubmitButton(evt) {
    evt.preventDefault();
      this._submitFormHandler(this.getInputValues())
  }


  _setEventListeners() {
    super._setEventListeners();
    this._form.addEventListener('submit', this._handlerSubmitButton);
  }


  _removeEventListeners() {
    super._removeEventListeners();
    this._form.removeEventListener('submit', this._handlerSubmitButton);
  }


  getInputValues() {
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }
}

