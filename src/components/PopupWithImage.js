import { Popup } from './Popup.js';
import { popupImgImage, popupImgTitle } from '../utils/constants.js'


export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
    

    popupOpen(data) {
        super.popupOpen();
        popupImgTitle.textContent = data.name;
        popupImgImage.src = data.link;
        popupImgImage.setAttribute.alt = data.name;
    }
    



}