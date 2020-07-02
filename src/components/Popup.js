export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._setEventListeners();
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.popupClose();
    }
  }

  _handleClickAnywhereClose(evt) {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button-close')) {
      this.popupClose();
    }
  }

  _setEventListeners() {
    this._popup.addEventListener('click', (evt) => this._handleClickAnywhereClose(evt));
  }

  popupOpen() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.classList.add('popup_type_opened');
  }

  popupClose() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.classList.remove('popup_type_opened');
  }
}