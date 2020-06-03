

export class Card {
    constructor(data, cardSelector) {
        this._cardSelector = cardSelector;
        this._name = data.name;
        this._link = data.link;
    }

    _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
    
    return cardElement;
    }



    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._handleLikeSet();
        });

        this._element.querySelector('.element__recycle').addEventListener('click', () => {
            this._handleDeleteCard();
        });
    }

    _handleLikeSet() {
        this._element.querySelector('.element__like').classList.toggle('element__like_set');
    }

    _handleDeleteCard() {
        this._element.remove();
    }




    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__photo').src = this._link;
        this._element.querySelector('.element__photo').alt = this._name;
        
        this._setEventListeners();

        return this._element;
    }

}










