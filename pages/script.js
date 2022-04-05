const profileEditBtn = document.querySelector('.profile__edit-btn');
const profileEditPopup = document.querySelector('.popup');
const profileCloseBtn = document.querySelector('.popup__close-btn');
const formElement = document.querySelector('.popup__form');
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

let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__name-description');
let nameInput = formElement.querySelector('#user-name');
let jobInput = formElement.querySelector('#user-description');

// Открытие попапа
function openProfilePopup() {
    profileEditPopup.classList.add('popup_opened')
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
};
profileEditBtn.addEventListener('click', openProfilePopup);
//---------------------------------------------

//Закрытие попапа
function closeProfilePopup() {
    profileEditPopup.classList.remove('popup_opened')
};
profileCloseBtn.addEventListener('click', closeProfilePopup);
//------------------------------------------------

//Сохранение информации о себе
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  if (nameInput.value === '') {
    profileName.textContent = 'Афиншаков Руслан';
  }
  if (jobInput.value === '') {
    profileJob.textContent = 'Студент Яндекс-Практикум';
  }
  closeProfilePopup()
};
formElement.addEventListener('submit', formSubmitHandler);
//-------------------------------------------------------------



let likes = document.querySelectorAll('li.gallery-cards__card div.gallery-cards__description gallery-cards__like-btn');
document.querySelector('.gallery-cards__like-btn').addEventListener('click', function(evt) {
  evt.target.classList.toggle('gallery-cards__like-btn_active');
});
