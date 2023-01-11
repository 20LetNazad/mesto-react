import React from 'react';
import api from '../utils/api';

export default function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    api
      .userInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(`Ошибка.....: ${err}`);
      });
  }, [userName, userDescription, userAvatar]);

  return (
    <main>
      <section className="profile">
        <div className="profile__content">
          <div className="profile__button" onClick={props.onEditAvatar}></div>
          <img
            className="profile__avatar"
            alt="Аватар пользователя"
            src={userAvatar}
          />
          <div className="profile__info">
            <div className="profile__edit">
              <h1 className="profile__nickmane">{userName}</h1>
              <button
                aria-label="Редактировать профиль"
                className="profile__edit-button"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button
          aria-label="Добавить изображение"
          className="add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="cards">
        <ul className="elements"></ul>
      </section>
    </main>
  );
}
