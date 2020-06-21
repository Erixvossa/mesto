
export class Card {
    constructor({ data, handleCardClick }, cardSelector) {
        this._cardSelector = cardSelector;
        this._data = data;
        this._handleCardClick = handleCardClick;
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

        this._element.querySelector('.element__photo').addEventListener('click', () => {
            this._handleCardClick(this._data);
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
        this._element.querySelector('.element__title').textContent = this._data.name;
        this._element.querySelector('.element__photo').src = this._data.link;
        this._element.querySelector('.element__photo').alt = this._data.name;
        
        this._setEventListeners();

        return this._element;
    }

}










