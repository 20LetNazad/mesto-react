export default function ImagePopup() {
  return (
    <div className="popup image-popup">
      <figure className="image-popup__block">
        <button aria-label="Закрыть" className="popup__close-button">
          Х
        </button>
        <img className="image-popup__img" />
        <figcaption className="image-popup__caption"></figcaption>
      </figure>
    </div>
  );
}
