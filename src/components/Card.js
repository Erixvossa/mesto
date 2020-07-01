export class Card {
  constructor({name, link, _id, owner, likes}, userId, cardSelector, handleCardClick, handleDeleteButtonClick, handleLikeButtonClick) {
    this._name = name;
    this._link = link;
    this._cardId = _id;
    this._ownerId = owner._id;
    this._likes = likes;
    this._userId = userId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteButtonClick = handleDeleteButtonClick;
    this._handleLikeButtonClick = handleLikeButtonClick;
  }
  
  _getTemplate() {
  const cardElement = document
  .querySelector(this._cardSelector)
  .content
  .querySelector('.element')
  .cloneNode(true);
  
  return cardElement;
  }


  _handleLikeSet(evt) {
    this._handleLikeButtonClick(this._cardId, this._likes.some(item => item._id === this._userId))
      .then(result => {
        this._likes = result.likes;
        this._card.querySelector('.element__like-counter').textContent = result.likes.length;
        evt.target.classList.toggle('element__like_set');
      })
      .catch(err => console.log(err));
  }


  _setEventListeners() {
    this._card.querySelector('.element__like').addEventListener('click', (evt) => this._handleLikeSet(evt));
    this._card.querySelector('.element__recycle').addEventListener('click', () => this._handleDeleteButtonClick(this._cardId, () => this._handleDeleteCard()));
    this._card.querySelector('.element__photo').addEventListener('click', () => this._handleCardClick({
      name: this._name,
      link: this._link
    }));
  }


  _checkId() {
    if (this._userId !== this._ownerId) {
      this._card.querySelector('.element__recycle').remove();
    }
    if (this._likes.some(item => item._id === this._userId)) {
      this._card.querySelector('.element__like').classList.add('element__like_set');
    }
  }


  createCard() {
    this._card = this._getTemplate();
    this._card.querySelector('.element__photo').src = this._link;
    this._card.querySelector('.element__photo').alt = this._name;
    this._card.querySelector('.element__title').textContent = this._name;
    this._card.querySelector('.element__like-counter').textContent = this._likes.length;
    this._setEventListeners();
    this._checkId();
    return this._card;
  }


  _handleDeleteCard() {
    this._card.remove();
  }
}


