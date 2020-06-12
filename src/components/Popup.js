export class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
    }

    popupOpen() {
        this._popupSelector.classList.add('popup_type_opened');
        this._setEventListeners();
    }


    popupClose() {
        this._popupSelector.classList.remove('popup_type_opened');
        this._removeEventListeners();
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.popupClose();
        }
    }


    _removeEventListeners() {
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _setEventListeners() {
        this._popupSelector.querySelector('popub__button-close').addEventListener('click', () => {
            this.popupClose();
        });
        document.addEventListener('keydown', this._handleEscClose);
    }

}