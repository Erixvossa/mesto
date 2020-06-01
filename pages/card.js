const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];



class Card {
    constructor(cardSelector) {
        this._cardSelector = cardSelector;
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
        console.log('пыщ');
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

class DefaultCard extends Card {
    constructor(data, cardSelector) {
        super(cardSelector);
        this._name = data.name;
        this._link = data.link;
    }


}

class UserAddedCard extends Card {
    constructor(name, link, cardSelector) {
        super(cardSelector);
        this._name = name;
        this._link = link;
    }

}





initialCards.forEach((item) => {
    const card = new DefaultCard(item, '#element');
    const cardElement = card.generateCard();
  
    // Добавляем в DOM
    document.querySelector('.elements').append(cardElement);
  });


export function renderUserAddedCard(name, link) {
    const card = new UserAddedCard(name, link, '#element');
    const cardElement = card.generateCard();
    document.querySelector('.elements').prepend(cardElement);
}


