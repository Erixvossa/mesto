import Popup from './Popup.js';

export class PopupWithConfirm extends Popup {
  constructor(popupSelector, handleConfirm) {
    super(popupSelector);
    this._handleConfirm = handleConfirm;
  }


  _setEventListeners() {
    super._setEventListeners();
    this._form = this._popup.querySelector('.popup__container');
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleConfirm(this._id, this._onConfirm);
    });
  }


  popupOpen(id, onConfirm) {
    this._id = id;
    this._onConfirm = onConfirm;
    super.popupOpen();
  }
}
