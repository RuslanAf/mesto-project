const profileEditBtn = document.querySelector('.profile__edit-btn');
const profileEditPopup = document.querySelector('.popup');
const profileCloseBtn = document.querySelector('.popup__close-btn');
const formElement = document.querySelector('.popup__form');

let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__name-description');
let nameInput = formElement.querySelector('#user-name');
let jobInput = formElement.querySelector('#user-description');

function openProfilePopup() {
    profileEditPopup.classList.add('popup_opened')
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
};
profileEditBtn.addEventListener('click', openProfilePopup);

function closeProfilePopup() {
    profileEditPopup.classList.remove('popup_opened')
};
profileCloseBtn.addEventListener('click', closeProfilePopup);

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


let likes = document.querySelectorAll('li.gallery-cards__card div.gallery-cards__description gallery-cards__like-btn');
document.querySelector('.gallery-cards__like-btn').addEventListener('click', function(evt) {
  evt.target.classList.toggle('gallery-cards__like-btn_active');
});
