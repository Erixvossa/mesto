import { Popup } from './Popup.js';


export class PopupWithForm extends Popup {
    constructor({ submitFormHandler }, popupSelector, validationForm) {
        super(popupSelector);
        this._submitFormHandler = submitFormHandler;
        this._form = this._popupSelector.querySelector('.popup__container');
        this._validationForm = validationForm;
    }

  popupClose() {
    this._form.reset();
      super.popupClose();
    }

  popupOpen() {
    this._validationForm.errorClear();
    super.popupOpen();
  }

  _setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitFormHandler(this.getInputValues());
}, { once: true });
  
//  this._popupSelector.querySelector('.popup__container').addEventListener('submit', this._submitFormHandler);
    super._setEventListeners();
  }


  getInputValues() {
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }
}

