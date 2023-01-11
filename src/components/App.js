import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(0);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(0);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(0);

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(0);
    setAddPlacePopupOpen(0);
    setEditAvatarPopupOpen(0);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        children={
          <>
            <input
              autocomplete="off"
              class="popup__input popup__input_type_name"
              id="popup__input_name"
              name="name"
              placeholder="Имя"
              type="text"
              minlength="2"
              maxlength="40"
              required
            />
            <span
              class="popup__input-error"
              id="popup__input_name-error"
            ></span>
            <input
              autocomplete="off"
              class="popup__input popup__input_type_description"
              id="popup__input_description"
              name="about"
              placeholder="Описаине"
              type="text"
              minlength="2"
              maxlength="200"
              required
            />
            <span
              class="popup__input-error"
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
              autocomplete="off"
              class="popup__input popup__input_type_image-name"
              id="popup__input_place-name"
              name="cardName"
              placeholder="Название"
              type="text"
              minlength="2"
              maxlength="30"
              required
            />
            <span
              class="popup__input-error"
              id="popup__input_place-name-error"
            ></span>
            <input
              autocomplete="off"
              class="popup__input popup__input_type_link"
              id="popup__input_url"
              name="link"
              placeholder="Ссылка на картинку"
              type="url"
              required
            />
            <span class="popup__input-error" id="popup__input_url-error"></span>
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
              autocomplete="off"
              class="popup__input popup__input_type_link"
              id="popup__input_avatar-url"
              name="avatar"
              placeholder="Ссылка на изображение"
              type="url"
              required
            />
            <span
              class="popup__input-error"
              id="popup__input_avatar-url-error"
            ></span>
          </>
        }
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <ImagePopup />
      <template className="template">
        <li className="cards__item element">
          <button
            aria-label="Удалить карточку"
            className="element__delete element__delete_visible"
          ></button>
          <img className="element__image" />
          <div className="element__info">
            <h2 className="element__title"></h2>
            <div className="element__like-block">
              <button
                aria-label="Поставить лайк"
                className="element__like"
              ></button>
              <p className="element__count"></p>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}
