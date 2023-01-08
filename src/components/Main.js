import ReactDOM from 'react-dom'
import React from 'react'

export default function Main() {
  return (
    <main>
      <section className="profile">
        <div className="profile__content">
          <div className="profile__button" onClick={handleEditAvatarClick}></div>
          <img
            src="<%=require('./images/avatar.jpg')%>"
            className="profile__avatar"
          />
          <div className="profile__info">
            <div className="profile__edit">
              <h1 className="profile__nickmane">Жак-Ив Кусто</h1>
              <button
                aria-label="Редактировать профиль"
                className="profile__edit-button"
                onClick={handleEditProfileClick}
              ></button>
            </div>
            <p className="profile__description">Исследователь океана</p>
          </div>
        </div>
        <button
          aria-label="Добавить изображение"
          className="add-button"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="cards">
        <ul className="elements"></ul>
      </section>
    </main>
  );
}


ReactDOM.render((
  <>
  <div className="popup profile-popup">
            <div className="popup__container">
                <button aria-label="Закрыть" className="popup__close-button">Х</button>
                <h2 className="popup__title">Редактировать профиль</h2>
                <form className="popup__form" id="edit-profile" novalidate>
                    <input autocomplete="off" className="popup__input popup__input_type_name" id="popup__input_name"
                        name="name" placeholder="Имя" type="text" minlength="2" maxlength="40" required />
                    <span className="popup__input-error" id="popup__input_name-error"></span>
                    <input autocomplete="off" className="popup__input popup__input_type_description"
                        id="popup__input_description" name="about" placeholder="Описаине" type="text" minlength="2"
                        maxlength="200" required />
                    <span className="popup__input-error" id="popup__input_description-error"></span>
                    <button className="popup__submit-button" type="submit">Сохранить</button>
                </form>
            </div>
        </div>
        <div className="popup card-popup">
            <div className="popup__container card-popup">
                <button aria-label="Закрыть" className="popup__close-button">Х</button>
                <h2 className="popup__title">Новое место</h2>
                <form className="popup__form" id="add-place" novalidate>
                    <input autocomplete="off" className="popup__input popup__input_type_image-name"
                        id="popup__input_place-name" name="cardName" placeholder="Название" type="text" minlength="2"
                        maxlength="30" required />
                    <span className="popup__input-error" id="popup__input_place-name-error"></span>
                    <input autocomplete="off" className="popup__input popup__input_type_link" id="popup__input_url"
                        name="link" placeholder="Ссылка на картинку" type="url" required />
                    <span className="popup__input-error" id="popup__input_url-error"></span>
                    <button className="popup__submit-button" type="submit">Создать</button>
                </form>
            </div>
        </div>
        <div className="popup avatar-popup">
            <div className="popup__container">
                <button aria-label="Закрыть" className="popup__close-button">Х</button>
                <h2 className="popup__title">Новое место</h2>
                <form className="popup__form" id="avatar" novalidate>
                    <input autocomplete="off" className="popup__input popup__input_type_link" id="popup__input_avatar-url"
                        name="avatar" placeholder="Ссылка на изображение" type="url" required />
                    <span className="popup__input-error" id="popup__input_avatar-url-error"></span>
                    <button className="popup__submit-button" type="submit">Сохранить</button>
                </form>
            </div>
        </div>
        </>
), document.querySelector('#root'));

function handleEditAvatarClick() {
  const popupAvatar = document.querySelector('.avatar-popup');
  popupAvatar.classList.add('popup_opened');
}

function handleAddPlaceClick() {
  const popupCard = document.querySelector('.card-popup');
  popupCard.classList.add('popup_opened');
}

export function handleEditProfileClick() {
  const popupProfile = document.querySelector('.profile-popup');
  popupProfile.classList.add('popup_opened');
}
