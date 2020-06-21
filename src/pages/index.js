//импортируем нужное из модулей:
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/Validate.js';
import './index.css'; // добавьте импорт главного файла стилей
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { templateElement, targetElements, initialCards, formPopupRules, currentName, currentProfession, editForm, addForm, popubAddButton, popubEditButton, popupImg, popupAdd, popup, authorProfessionInput, authorNameInput, popupImgImage, popupImgTitle } from '../utils/constants.js';


const profileFormValidator = new FormValidator(formPopupRules, editForm);
const addFormValidator = new FormValidator(formPopupRules, addForm);




//экземпляр класса для использования метода
const popupWithImage = new PopupWithImage(popupImg, popupImgImage, popupImgTitle);

 
//класс добавления карточки
const popupWithFormAdd = new PopupWithForm({
  submitFormHandler: (data) => {
    //evt.preventDefault();
    const item = {

      name: data.name,
      link: data.url
    };
    // createCard(item);

    const cardElement = createCard(item).generateCard();
    cardList.addItemOnTop(cardElement);
    popupWithFormAdd.popupClose();
  }
}, popupAdd, addFormValidator, '.popup__container');
 
 
//класс создания карточки
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    // createCard(item);

    const cardElement = createCard(item).generateCard();
    cardList.addItem(cardElement);
  }
}, targetElements);





//Функция создания карточки
const createCard = (data) => {
  return new Card({
    data,
    handleCardClick: (cardData) => {
      popupWithImage.popupOpen(cardData);
    }
  }, templateElement);
}






//рендерим изначальные карточки
cardList.renderItems(initialCards); 
 
//класс изменения автора
const userInfo = new UserInfo ({
  authorNameElement: currentName,
  authorProfessionElement: currentProfession
});



//класс формы редактирования автора
const changeAuthorForm = new PopupWithForm ({
  submitFormHandler: (data) => {
    //evt.preventDefault();

    userInfo.setUserInfo(data);

    console.log('2');
    changeAuthorForm.popupClose();
  }
}, popup, profileFormValidator, '.popup__container');
 


 
//класс формы редактирования автора
const openFormAuthor = function() {
  console.log('1');
  const infoUser = userInfo.getUserInfo();
  authorNameInput.value = infoUser.name;
  authorProfessionInput.value = infoUser.profession;
  
  const event = new Event('input');
  authorNameInput.dispatchEvent(event);
  authorProfessionInput.dispatchEvent(event);


  changeAuthorForm.popupOpen();
};


//добавляем листнеры на кнопки на странице
popubEditButton.addEventListener('click', openFormAuthor);
popubAddButton.addEventListener('click', () => popupWithFormAdd.popupOpen());




addFormValidator.enableValidation();

profileFormValidator.enableValidation();