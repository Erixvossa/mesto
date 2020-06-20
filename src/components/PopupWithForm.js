import { Popup } from './Popup.js';
import { editForm, addForm } from '../utils/constants.js';
import { clearPopupValidationError } from '../pages/index.js';

export class PopupWithForm extends Popup {
    constructor({ submitFormHandler }, popupSelector) {
        super(popupSelector);
        this._submitFormHandler = submitFormHandler;
        this._form = this._popupSelector.querySelector('.popup__container');
    }

    popupClose() {
        if (this._popupSelector.contains(addForm)) {
            clearPopupValidationError(addForm);
        }
        else if (this._popupSelector.contains(editForm)) {
          clearPopupValidationError(editForm);
        }


        super.popupClose();
    console.log('4');
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

