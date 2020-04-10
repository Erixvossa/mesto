let popup = document.querySelector('.popup');
let popubButton = document.querySelector('.profile-info__edit-button');
let closeButton = document.querySelector('.popub__button-close');
let popupName = document.querySelector('popup__name');



popubButton.addEventListener('click', function () {
    console.log('нажал');
    popup.classList.add('popup_opened');
});

closeButton.addEventListener('click', function () {
    console.log('нажал_закрыть');
    popup.classList.remove('popup_opened');
});
