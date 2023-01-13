import React from 'react';

export default function Card({ onCardClick, card }) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className="cards__item element">
      <button
        aria-label="Удалить карточку"
        className="element__delete element__delete_visible"
      ></button>
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
