import React, { useState, useEffect } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const [currentUser, setCurrentUser] = React.useState('');

  useEffect(() => {
    api
      .userInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(`Ошибка.....: ${err}`);
      });
  }, []);

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            autoComplete="off"
            className="popup__input popup__input_type_name"
            id="popup__input_name"
            name="name"
            placeholder="Имя"
            type="text"
            minLength="2"
            maxLength="40"
            required
          />
          <span
            className="popup__input-error"
            id="popup__input_name-error"
          ></span>
          <input
            autoComplete="off"
            className="popup__input popup__input_type_description"
            id="popup__input_description"
            name="about"
            placeholder="Описаине"
            type="text"
            minLength="2"
            maxLength="200"
            required
          />
          <span
            className="popup__input-error"
            id="popup__input_description-error"
          ></span>
        </PopupWithForm>
        <PopupWithForm
          name="card"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            autoComplete="off"
            className="popup__input popup__input_type_image-name"
            id="popup__input_place-name"
            name="cardName"
            placeholder="Название"
            type="text"
            minLength="2"
            maxLength="30"
            required
          />
          <span
            className="popup__input-error"
            id="popup__input_place-name-error"
          ></span>
          <input
            autoComplete="off"
            className="popup__input popup__input_type_link"
            id="popup__input_url"
            name="link"
            placeholder="Ссылка на картинку"
            type="url"
            required
          />
          <span
            className="popup__input-error"
            id="popup__input_url-error"
          ></span>
        </PopupWithForm>
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            autoComplete="off"
            className="popup__input popup__input_type_link"
            id="popup__input_avatar-url"
            name="avatar"
            placeholder="Ссылка на изображение"
            type="url"
            required
          />
          <span
            className="popup__input-error"
            id="popup__input_avatar-url-error"
          ></span>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}
