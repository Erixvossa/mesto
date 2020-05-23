
//создаем настроечный объект
const formPopupRules = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popub__submit-button',
    inactiveButtonClass: 'popub__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

//показываем ошибку по id
const showInputError = (form, formInput, errorMessage, validationRules) => {
    const errorElement = form.querySelector(`#${formInput.id}-error`);
    formInput.classList.add(validationRules.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationRules.errorClass);
  };
  
  
//удаляем ошибку
const hideInputError = (form, formInput, validationRules) => {
    const errorElement = form.querySelector(`#${formInput.id}-error`);
    formInput.classList.remove(validationRules.inputErrorClass);
    errorElement.classList.remove(validationRules.errorClass);
    errorElement.textContent = '';
};
  
  
//проверяем валидность формы
const checkValidity = (form, formInput, validationRules) => {
    if (!formInput.validity.valid) {
      showInputError(form, formInput, formInput.validationMessage, validationRules);
    } else {
      hideInputError(form, formInput, validationRules);
    }
};
  
  
const hasInvalidInput = (inputList) => {
    return inputList.some((formInput) => {
        return !formInput.validity.valid;
    })
};
  
  
//состояние кнопки
//здесь и в остальных местах добавил отключение кнопки через атрибут, тк через энтер позволял отправить в обход выключенной кнопки
const toggleSubmit = (inputList, buttonElement, validationRules) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(validationRules.inactiveButtonClass);
        buttonElement.setAttribute('disabled', 'true');
    } else {
        buttonElement.classList.remove(validationRules.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
};
  
//добавляем слушатели
const setEventListeners = (form, validationRules) => {
    const inputList = Array.from(form.querySelectorAll(validationRules.inputSelector));
    const buttonElement = form.querySelector(validationRules.submitButtonSelector);
    //toggleSubmit(inputList, buttonElement, validationRules);
    inputList.forEach((formInput) => {
        formInput.addEventListener('input', function () {
        checkValidity(form, formInput, validationRules);
        toggleSubmit(inputList, buttonElement, validationRules);
        });
    });
};
  
//запускаем валидацию
const enableValidation = (validationRules) => {
    const formList = Array.from(document.querySelectorAll(validationRules.formSelector));
    formList.forEach((form) => {
        setEventListeners(form, validationRules);
    });
};

enableValidation(formPopupRules);