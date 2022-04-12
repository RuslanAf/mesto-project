// Кнопки редактирования
const profileEditBtn = document.querySelector('.profile__edit-btn');
const addPlaceBtn = document.querySelector('.profile__add-btn')

//Кнопки закрытия
const profileCloseBtn = document.querySelector('.popup__close-btn_area_profile');
const addPlaceCloseBtn = document.querySelector('.popup__close-btn_area_add-place');
const imgCloseBtn = document.querySelector('.popup__close-btn_area_fulscreen-img');

//Попапы
const profileEditPopup = document.querySelector('#popup-edit-profile');
const addPlacePopup = document.querySelector('#popup-add-place');
const imgPopup = document.querySelector('#popup-fulscreen-img');

//Формы
const editProfileForm = document.querySelector('.popup__form_type_edit-profile');

//Поля ввода
const nameInput = editProfileForm.querySelector('#user-name');
const jobInput = editProfileForm.querySelector('#user-description');
const placeName = document.querySelector('#place-name');
const placeUrl = document.querySelector('#place-url');

//Информация о пользователе
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__name-description');

//фото и подпись фуллскрин картинки
const fullScreenImg = document.querySelector('.popup__fullscreen-img');
const popupPlaceName = document.querySelector('.popup__place-name');

//Элементы карточки
const galleryCards = document.querySelector('.gallery-cards');
const cardTemplate = document.querySelector('#gallery-cards__card-template').content;
const cardImage = cardTemplate.querySelector('.gallery-cards__image');
const cardTitle = cardTemplate.querySelector('.gallery-cards__title');

//Массив для загрузки начальных карточек
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

//====================================== Функции ======================================//

//Открытие попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
};

//Закрытие попапов
function closePopup (popup) {
  popup.classList.remove('popup_opened');
}

// Открытие попапа профиля
function openProfilePopup() {
  openPopup(profileEditPopup);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
};

//Сохранение информации о пользователе
function editProfileInfo (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  if (nameInput.value === '') {
    profileName.textContent = 'Афиншаков Руслан';
  }
  if (jobInput.value === '') {
    profileJob.textContent = 'Студент Яндекс-Практикум';
  }
  closePopup(profileEditPopup);
};

// Открытие попапа формы добавления места
function openAddPlacePopup() {
  openPopup(addPlacePopup)
  document.querySelector('.popup__form_type_add-place').reset();
};

//============================== Обработчики событий ==============================//

//Открыть форму редактирования профиля нажатием на кнопку
profileEditBtn.addEventListener('click', openProfilePopup);


//Закрыть форму редактирования профиля нажав на крестик
profileCloseBtn.addEventListener('click', function () {
  closePopup(profileEditPopup);
});

//Открыть форму добавления места нажатием на кнопку
addPlaceBtn.addEventListener('click', openAddPlacePopup)


//Закрыть форму форму добавления места нажав на крестик
addPlaceCloseBtn.addEventListener('click', function () {
  closePopup(addPlacePopup);
});

// Закрыть попап картинки нажав на крестик
imgCloseBtn.addEventListener('click', function () {
  closePopup(imgPopup);
})


//Обновить информацию о пользователе данными из формы
editProfileForm.addEventListener('submit', editProfileInfo);


//Добавить новое место с данными из формы
document.querySelector('.popup__form_type_add-place').addEventListener('submit', function (evt){
  evt.preventDefault();
  const card = createCard (placeName.value, placeUrl.value);
  addCard(card, galleryCards);
  closePopup(addPlacePopup);
});

//============= Функции для отрисовки/добавления карточек =============//

//Создание шаблона карточки
function createCard (name, link) {
  cardTitle.textContent = name;
  cardImage.alt = name;
  cardImage.src = link;
  const cardItem = cardTemplate.cloneNode(true);

//Удаление карточек по нажатию на иконку
  const cardDeleteBtn = cardItem.querySelector('.gallery-cards__delete-btn');
  cardDeleteBtn.addEventListener('click', function (evt) {
    evt.target.closest('.gallery-cards__card').remove();
  });

//Реализация лайков
  const cardLikeBtn = cardItem.querySelector('.gallery-cards__like-btn');
  cardLikeBtn.addEventListener('click', function (evt) {
    evt.target.classList.toggle('gallery-cards__like-btn_active');
  })

// Открытие большой картинки по нажатию на фотографию
  const placeCard = cardItem.querySelector('.gallery-cards__image');
  placeCard.addEventListener('click', function (evt) {
      fullScreenImg.src = link;
      fullScreenImg.alt = name;
      popupPlaceName.textContent = name;
      openPopup(imgPopup);
  })

  return cardItem;
}

// Функция для вставки карточки
function addCard (card, container) {
  container.prepend(card);
}

//Загрузка начальных карточек на страницу
initialCards.forEach(function(element) {
  const card = createCard(element.name, element.link);
  addCard(card, galleryCards);
})
