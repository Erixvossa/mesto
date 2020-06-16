//импортируем нужное из модулей:
import { Card } from './Card.js';
import { FormValidator } from './Validate.js';
import '../pages/index.css'; // добавьте импорт главного файла стилей
import { PopupWithForm } from './PopupWithForm.js';
import { PopupWithImage } from './PopupWithImage.js';
import { Section } from './Section.js';
import { UserInfo } from './UserInfo.js';
import { templateElement, targetElements, initialCards, formPopupRules, elementImageInput, elementTitleInput, currentName, currentProfession, editForm, addForm, popubAddButton, popubEditButton, popupImg, popupAdd, popupAddSubmitButton, popup, popupSubmitButton, authorProfessionInput, authorNameInput } from '../utils/constants.js';




//функция очистки ошибок формы
export function clearPopupValidationError(form) {
  const formInputsLocal = Array.from(form.querySelectorAll('.popup__input'));
  formInputsLocal.forEach((input) => {
    input.classList.remove('popup__input_type_error');
  });
  const popupSpanErrorsLocal = Array.from(form.querySelectorAll('.popup__error'));
  popupSpanErrorsLocal.forEach((span) => {
    span.classList.remove('popup__error_visible');
    span.textContent = '';
  });
    if (form === editForm) {
      popupSubmitButton.classList.remove('popub__submit-button_disabled');
    }
    else if (form === addForm) {
      popupAddSubmitButton.classList.add('popub__submit-button_disabled');
      popupAddSubmitButton.setAttribute('disabled', 'true');
      elementTitleInput.value = '';
      elementImageInput.value = '';
    }
  console.log('3');
}


 
//класс добавления карточки
const popupWithFormAdd = new PopupWithForm({
  submitFormHandler: (evt) => {
    evt.preventDefault();
    const item = {
      name: elementTitleInput.value,
      link: elementImageInput.value
    };
    const card = new Card({
      data: item,
      handleCardClick: () => {
        new PopupWithImage(popupImg).popupOpen(item);
      }
    }, templateElement);
    const cardElement = card.generateCard();
    CardList.addItemOnTop(cardElement);
    closeFormAddPhoto();
  }
}, popupAdd);
 
 
//класс создания карточки
const CardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card({
      data: item,
      handleCardClick: () => {
        new PopupWithImage(popupImg).popupOpen(item);
      }
    }, templateElement);
    const cardElement = card.generateCard();
    CardList.addItem(cardElement);
  }
}, targetElements);


//рендерим изначальные карточки
CardList.renderItems(initialCards); 
 
//класс изменения автора
const userInfo = new UserInfo ({
  name: currentName,
  job: currentProfession
});
 
//класс формы редактирования автора
const changeAuthorForm = new PopupWithForm ({
  submitFormHandler: (evt) => {
    evt.preventDefault();
    userInfo.setUserInfo();
    console.log('2');
    closeFormAuthor();
  }
}, popup);
 
//класс формы добавления фото
const openFormAddPhoto = function() {
  popupWithFormAdd.popupOpen();
};
const closeFormAddPhoto = function() {
  popupWithFormAdd.popupClose();
};
 

 
//класс формы редактирования автора
const openFormAuthor = function() {
  console.log('1');
  const infoUser = userInfo.getUserInfo();
  authorNameInput.value = infoUser.name;
  authorProfessionInput.value = infoUser.job;
  changeAuthorForm.popupOpen();
};
const closeFormAuthor = function() {
  changeAuthorForm.popupClose();
};
 

//добавляем листнеры на кнопки на странице
popubEditButton.addEventListener('click', openFormAuthor);
popubAddButton.addEventListener('click', openFormAddPhoto);


//функция запуска валидации
function startValidation(object) {
  const formsList = Array.from(document.querySelectorAll(object.formSelector));
  formsList.forEach((formElement) => {
  new FormValidator(object, formElement).enableValidation();
  });
}

//запускаем валидацию с настроечным объектом
startValidation(formPopupRules);



