import { Popup } from './Popup.js';
import { editForm, addForm } from '../utils/constants.js';
import { clearPopupValidationError } from './index.js';

export class PopupWithForm extends Popup {
    constructor({ submitFormHandler }, popupSelector) {
        super(popupSelector);
        this._submitFormHandler = submitFormHandler;
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
        this._popupSelector.querySelector('.popup__container').addEventListener('submit', this._submitFormHandler);
        super._setEventListeners();
      }


      getInputValues() {
        const item = {
          name: this._popupSelector.querySelector('.popup__input_type_name').value,
          link: this._popupSelector.querySelector('.popup__input_type_url').value
        };
        return item;
      }



}

