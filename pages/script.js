const popup = document.querySelectorAll('.popup');
const profileEditBtn = document.querySelector('.profile__edit-btn');
const addPlaceBtn = document.querySelector('.profile__add-btn')
const profileEditPopup = document.querySelector('#popup-edit-profile');
const addPlacePopup = document.querySelector('#popup-add-place');
const profileCloseBtn = document.querySelector('.popup__close-btn_area_profile');
const addPlaceCloseBtn = document.querySelector('.popup__close-btn_area_add-place');
const likeBtn = document.querySelector('.gallery-cards__like-btn');

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


//открытие попапов
function openPopup(element) {
  element.classList.add('popup_opened');
};

//закрытие попапов
function closePopup (element) {
  element.classList.remove('popup_opened');
}

// Открытие попапа профиля
function openProfilePopup() {
  openPopup(profileEditPopup);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
};
profileEditBtn.addEventListener('click', openProfilePopup);
//---------------------------------------------

//Закрытие попапа профиля
function closeProfilePopup() {
  closePopup(profileEditPopup);
};
profileCloseBtn.addEventListener('click', closeProfilePopup);
//------------------------------------------------

// Открытие попапа формы добавления места
function openAddPlacePopup() {
  openPopup(addPlacePopup)
};
addPlaceBtn.addEventListener('click', openAddPlacePopup)
//------------------------------------------------

// Закрытие попапа формы добавления места
function closeAddPlacePopup() {
  closePopup(addPlacePopup)
};
addPlaceCloseBtn.addEventListener('click', closeAddPlacePopup);
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

//Добавление стартовых карточек
const cardTemplate = document.querySelector('#gallery-cards__card-template').content;
const galleryCards = document.querySelector('.gallery-cards');

function addPlace (placeName, imgUrl) {
  const cardTemplate = document.querySelector('#gallery-cards__card-template').content;
  const cardElement = cardTemplate.querySelector('.gallery-cards__card').cloneNode(true);
  cardElement.querySelector('.gallery-cards__title').textContent = placeName;
  cardElement.querySelector('.gallery-cards__image').alt = placeName;
  cardElement.querySelector('.gallery-cards__image').src = imgUrl;
  likeBtn.addEventListener('click', function (evt) {
    evt.target.classList.toggle('gallery-cards__like-btn_active');
  });
  cardDeleteBtn.addEventListener('click', deleteCard)
  galleryCards.prepend(cardElement);
  // closeAddPlacePopup();
}
//document.querySelector('.popup__form_type_add-place').addEventListener('submit', addPlace);






initialCards.forEach(function (element) {
  const cardElement = cardTemplate.querySelector('.gallery-cards__card').cloneNode(true);
  cardElement.querySelector('.gallery-cards__image').src = element.link;
  cardElement.querySelector('.gallery-cards__image').alt = element.name;
  cardElement.querySelector('.gallery-cards__title').textContent = element.name;
  galleryCards.append(cardElement);

})
//--------------------------------------------------------------

//Добавление лайков
const likeBtns = document.querySelectorAll('.gallery-cards__like-btn');

likeBtns.forEach(function(element) {
  element.addEventListener('click', function (evt) {
    evt.target.classList.toggle('gallery-cards__like-btn_active');
  });
});
//------------------------------------------------------------------------

let placeNameInput = document.querySelector('#place-name');
let imgUrlInput = document.querySelector('#place-url');

//Добавление нового места
// function addPlace (evt) {
//   evt.preventDefault();
//   const cardTemplate = document.querySelector('#gallery-cards__card-template').content;
//   const cardElement = cardTemplate.querySelector('.gallery-cards__card').cloneNode(true);
//   cardElement.querySelector('.gallery-cards__title').textContent = placeNameInput.value;
//   cardElement.querySelector('.gallery-cards__image').alt = placeNameInput.value;
//   cardElement.querySelector('.gallery-cards__image').src = imgUrlInput.value;
//   galleryCards.prepend(cardElement);
//   imgUrlInput.value = '';
//   placeNameInput.value = ''
//   closeAddPlacePopup();
// };
// document.querySelector('.popup__form_type_add-place').addEventListener('submit', addPlace);
//------------------------------------------------------------

//Удаление карточки
const cardDeleteBtn = document.querySelector('.gallery-cards__delete-btn');
const listItem = cardDeleteBtn.closest('.gallery-cards__card');

function deleteCard () {
  listItem.remove();
};

cardDeleteBtn.addEventListener('click', deleteCard);
//----------------------------------------------------
