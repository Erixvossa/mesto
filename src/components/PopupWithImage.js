import { Popup } from './Popup.js';



export class PopupWithImage extends Popup {
    constructor(popupId, imageElement, titleElement) {
        super(popupId);
        this._image = this._popupId.querySelector(imageElement);
        this._title = this._popupId.querySelector(titleElement);        
    }
    

    popupOpen(data) {
        this._title.textContent = data.name;
        this._image.src = data.link;
        this._image.setAttribute.alt = data.name;
        super.popupOpen();
    }
    

}