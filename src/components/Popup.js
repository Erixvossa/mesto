export class Popup {
    constructor(popupId) {
        this._popupId = popupId;
        this._handleClickAnywhereClose = this._handleClickAnywhereClose.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    popupOpen() {
        this._popupId.classList.add('popup_type_opened');
        this._setEventListeners();
    }


    popupClose() {
        this._popupId.classList.remove('popup_type_opened');
        this._removeEventListeners();
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.popupClose();
        }
    }

    _handleClickAnywhereClose(evt) {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popub__button-close') || evt.target.classList.contains('popup-img__button-close')) {
            this.popupClose();
        }
    }



    _removeEventListeners() {
        document.removeEventListener('keydown', this._handleEscClose);
        this._popupId.removeEventListener('click', this._handleClickAnywhereClose);
    }

    _setEventListeners() {
        this._popupId.addEventListener('click', this._handleClickAnywhereClose);
        document.addEventListener('keydown', this._handleEscClose);
    }

}