import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function Card({ onCardClick, card }) {
  function handleCardClick() {
    onCardClick(card);
  }

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `card__like-button ${
    isLiked && 'card__like-button_active'
  }`;

  return (
    <li className="cards__item element">
      {isOwn && (
        <button
          className="element__delete element__delete_visible"
          onClick={handleCardClick}
        />
      )}
      <img
        className="element__image"
        src={card.link}
        onClick={handleCardClick}
      />
      <div className="element__info">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-block">
          <button
            aria-label="Поставить лайк"
            className="element__like"
          ></button>
          <p className="element__count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}
