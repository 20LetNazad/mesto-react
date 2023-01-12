import React from 'react';

export default function ImagePopup(props) {
  return (
    <div className={`popup image-popup ${props.card && 'popup_opened'}`}>
      <figure className="image-popup__block">
        <button
          aria-label="Закрыть"
          className="popup__close-button"
          onClick={props.onClose}
        >
          Х
        </button>
        <img
          className="image-popup__img"
          src={props.card.link}
          alt={props.card.name}
        />
        <figcaption className="image-popup__caption">
          {props.card.name}
        </figcaption>
      </figure>
    </div>
  );
}
