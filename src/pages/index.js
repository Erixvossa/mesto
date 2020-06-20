//импортируем нужное из модулей:
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/Validate.js';
import './index.css'; // добавьте импорт главного файла стилей
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
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

//экземпляр класса для использования метода
const popupWithImage = new PopupWithImage(popupImg);

 
//класс добавления карточки
const popupWithFormAdd = new PopupWithForm({
  submitFormHandler: (data) => {
    //evt.preventDefault();
    const item = {
      // name: elementTitleInput.value, 
      // link: elementImageInput.value 

      name: popupWithFormAdd.getInputValues().name,
      link: popupWithFormAdd.getInputValues().url
    };
    createCard(item);
    // const card = new Card({
    //   data: item,
    //   handleCardClick: (item) => {
    //     popupWithImage.popupOpen(item);
    //   }
    // }, templateElement);
    const cardElement = createCard(item).generateCard();
    cardList.addItemOnTop(cardElement);
    popupWithFormAdd.popupClose();
  }
}, popupAdd);
 
 
//класс создания карточки
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    createCard(item);
    // const card = new Card({
    //   data: item,
    //   handleCardClick: (item) => {
    //     popupWithImage.popupOpen(item);
    //   }
    // }, templateElement);
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
  authorNameSelector: currentName,
  authorJobSelector: currentProfession
});

//функция получения даты из инпутов для формы
// function getDataFromAddForm() {
//   const dataObj = {
//     name: authorNameInput.value,
//     job: authorProfessionInput.value
//   }
//   return dataObj;
// }


//класс формы редактирования автора
const changeAuthorForm = new PopupWithForm ({
  submitFormHandler: () => {
    //evt.preventDefault();
    userInfo.setUserInfo(changeAuthorForm.getInputValues());
    console.log('2');
    changeAuthorForm.popupClose();
  }
}, popup);
 
//класс формы добавления фото
// const openFormAddPhoto = function() {
//   popupWithFormAdd.popupOpen();
// };
// const closeFormAddPhoto = function() {
//   popupWithFormAdd.popupClose();
// };
 

 
//класс формы редактирования автора
const openFormAuthor = function() {
  console.log('1');
  const infoUser = userInfo.getUserInfo();
  authorNameInput.value = infoUser.name;
  authorProfessionInput.value = infoUser.profession;
  changeAuthorForm.popupOpen();
};
// const closeFormAuthor = function() {
//   changeAuthorForm.popupClose();
// };
 

//добавляем листнеры на кнопки на странице
popubEditButton.addEventListener('click', openFormAuthor);
popubAddButton.addEventListener('click', () => popupWithFormAdd.popupOpen());


//функция запуска валидации
function startValidation(object) {
  const formsList = Array.from(document.querySelectorAll(object.formSelector));
  formsList.forEach((formElement) => {
  new FormValidator(object, formElement).enableValidation();
  });
}

//запускаем валидацию с настроечным объектом
startValidation(formPopupRules);



