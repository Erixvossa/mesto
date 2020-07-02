//импортируем нужное из модулей:
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/Validate.js';
import './index.css'; // добавьте импорт главного файла стилей
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { formPopupRules } from '../utils/constants.js';
import { Api } from '../components/Api.js';
import { PopupWithConfirm } from '../components/PopupWithConfirm.js';





const api = new Api('https://mesto.nomoreparties.co/v1/cohort-12', 'ab9b1d7a-c640-4a74-a08b-ca064f57658c');


//Селекторы попапов
  const popupEditSelector = document.querySelector('.popup__edit');
  const popupEditForm = popupEditSelector.querySelector('.popup__container');
  const popupEditFormSubmitButton = popupEditForm.querySelector('.popup__submit-button');
  const popupAddSelector = document.querySelector('.popup__add');
  const popupAddForm = popupAddSelector.querySelector('.popup__container');
  const popupAddFormSubmitButton = popupAddForm.querySelector('.popup__submit-button');
  const popupAvatarSelector = document.querySelector('.popup__avatar');
  const popupAvatarForm = popupAvatarSelector.querySelector('.popup__container');
  const popupAvatarFormSubmitButton = popupAvatarForm.querySelector('.popup__submit-button');

//Кнопки на странице
  const popupEditButton = document.querySelector('.profilee-info__edit-button');
  const popupAddButton = document.querySelector('.profile__add-button');
  const avatarButton = document.querySelector('.profile__avatar-button');

//валидация форм попапов
const profileFormValidator = new FormValidator(formPopupRules, popupEditForm);
const addFormValidator = new FormValidator(formPopupRules, popupAddForm);
const popupAvatarFormValidator = new FormValidator(formPopupRules, popupAvatarForm);

//экземпляр класса для использования метода
const imagePopup = new PopupWithImage('.popup-img');



//Создание карточки
const createCard = data => new Card(
  data,
  userInfo.getUserId(),
  '#element',
  ({name, link}) => imagePopup.popupOpen(name, link),
  (id, onConfirm) => popupWithConfirm.popupOpen(id, onConfirm),
  (id, liked) => api.likeCard(id, liked)
).createCard();

//Создание попапов
const popupWithFormEdit = new PopupWithForm(
  '.popup__edit',
  data => {
    
    api.setUserInfo({
      name: data.username,
      about: data.description
    })
      .then(result => {
        userInfo.setUserInfo(result.name, result.about);
        popupWithFormEdit.popupClose();
      })
      .catch(err => console.log(err))
      .finally(() => popupWithFormEdit.handleSubmitButtonTextContent());
  },
  profileFormValidator,
  () => {
    const {username, description} = userInfo.getUserInfo();
    popupEditFormSubmitButton.classList.remove('popup__submit-button_disabled');
    popupEditFormSubmitButton.removeAttribute('disabled');
    document.querySelector('.popup__input_type_name').value = username;
    document.querySelector('.popup__input_type_subname').value = description;
  }
);

const popupWithFormAdd = new PopupWithForm(
  '.popup__add',
  data => {
    api.uploadCard(data)
      .then(result => {
        cardList.addItemOnTop(createCard(result));
        popupWithFormAdd.popupClose();
      })
      .catch(err => console.log(err))
      .finally(() => popupWithFormAdd.handleSubmitButtonTextContent());
  },
  addFormValidator
);



const popupWithConfirm = new PopupWithConfirm(
  '.popup__delete',
  (id, func) => {
    api.deleteCard(id)
      .then(result => {
        func();
        popupWithConfirm.popupClose();
      })
      .catch(err => console.log(err));
  }
);

const popupWithFormAvatar = new PopupWithForm(
  '.popup__avatar',
  ({link}) => {
    api.changeAvatar(link)
      .then(result => {
        userInfo.setUserAvatar(result.avatar);
        popupWithFormAvatar.popupClose();
      })
      .catch(err => console.log(err))
      .finally(() => popupWithFormAvatar.handleSubmitButtonTextContent());
  },
  popupAvatarFormValidator
);

//селекторы данных пользователя
const userInfo = new UserInfo({
  usernameSelector: '.profilee-info__title',
  descriptionSelector: '.profilee-info__subtitle',
  avatarSelector: '.profile__avatar'
});


//Секция для карточек
let cardList;



//запрос данных юзера
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([{name, about, avatar, _id}, initialCards]) => {
    userInfo.setUserInfo(name, about);
    userInfo.setUserAvatar(avatar);
    userInfo.setUserId(_id);
    cardList = new Section({
      items: initialCards,
      renderer: item => cardList.addItem(createCard(item))
    }, '.elements');
    cardList.renderItems();
  })
  .catch(err => console.log(err));



profileFormValidator.enableValidation();
addFormValidator.enableValidation();
popupAvatarFormValidator.enableValidation();




popupEditButton.addEventListener('click', () => popupWithFormEdit.popupOpen());
popupAddButton.addEventListener('click', () => popupWithFormAdd.popupOpen());
avatarButton.addEventListener('click', () => popupWithFormAvatar.popupOpen());
