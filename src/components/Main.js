import { useEffect, useState } from 'react';
import api from '../utils/Api';
import Card from './Card';

export default function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.userInfo(), api.renderCards()])
      .then(([userData, cardData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);

        setCards(cardData);
      })
      .catch((err) => {
        console.log(`Ошибка.....: ${err}`);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__content">
          <div className="profile__button" onClick={onEditAvatar}></div>
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
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button
          aria-label="Добавить изображение"
          className="add-button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="cards">
        <ul className="elements">
          {cards.map((cardData) => (
            <Card
              key={cardData._id}
              card={cardData}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
