
const profileEditBtn = document.querySelector('.profile__edit-btn');
const addPlaceBtn = document.querySelector('.profile__add-btn')
const profileEditPopup = document.querySelector('#popup-edit-profile');
const addPlacePopup = document.querySelector('#popup-add-place');
const profileCloseBtn = document.querySelector('.popup__close-btn_area_profile');
const addPlaceCloseBtn = document.querySelector('.popup__close-btn_area_add-place');
// const likeBtn = document.querySelector('.gallery-cards__like-btn');
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

let placeName = document.querySelector('#place-name');
let placeUrl = document.querySelector('#place-url');
// Открытие попапа формы добавления места
function openAddPlacePopup() {
  openPopup(addPlacePopup)
  placeName.value = '';
  placeUrl.value = ''
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


//Добавление начальных карточек
const galleryCards = document.querySelector('.gallery-cards');
const cardTemplate = document.querySelector('#gallery-cards__card-template').content;


let cardImage = cardTemplate.querySelector('.gallery-cards__image');
let cardTitle = cardTemplate.querySelector('.gallery-cards__title')

function createCard (name, link) {

  cardTitle.textContent = name;
  cardImage.alt = name;
  cardImage.src = link;
  const cardItem = cardTemplate.cloneNode(true);

  const cardDeleteBtn = cardItem.querySelector('.gallery-cards__delete-btn');
  cardDeleteBtn.addEventListener('click', function (evt) {
    evt.target.closest('.gallery-cards__card').remove()
  })

  const cardLikeBtn = cardItem.querySelector('.gallery-cards__like-btn');
  cardLikeBtn.addEventListener('click', function (evt) {
    evt.target.classList.toggle('gallery-cards__like-btn_active');
  })

  return cardItem;
}
function addCard (card, container) {
  container.prepend(card)
}

initialCards.forEach(function(element) {
  const card = createCard(element.name, element.link);
  addCard(card, galleryCards);

})
//=======================================================================


// function addPlace (evt) {
// evt.preventDefault();
// const card = createCard (placeName.value, placeUrl.value);
// addCard(card, galleryCards);
// closeAddPlacePopup();
// }

document.querySelector('.popup__form_type_add-place').addEventListener('submit', function (evt){
  evt.preventDefault();
  const card = createCard (placeName.value, placeUrl.value);
  addCard(card, galleryCards);
  closeAddPlacePopup();
});
