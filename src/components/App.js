import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

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
    setSelectedCard(false);
  }

  return (
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
        children={
          <>
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
          </>
        }
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="card"
        title="Новое место"
        children={
          <>
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
          </>
        }
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        children={
          <>
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
          </>
        }
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}
