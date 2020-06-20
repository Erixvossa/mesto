export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
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

    _handleClickAnywhereClose(evt) {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popub__button-close') || evt.target.classList.contains('popup-img__button-close')) {
            this.popupClose();
        }
    }



    _removeEventListeners() {
        document.removeEventListener('keydown', evt => this._handleEscClose(evt));
        this._popupSelector.removeEventListener('click', evt => this._handleClickAnywhereClose(evt));
    }

    _setEventListeners() {
        this._popupSelector.addEventListener('click', evt => this._handleClickAnywhereClose(evt));
        document.addEventListener('keydown', evt => this._handleEscClose(evt));
    }

}