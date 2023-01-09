export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <button aria-label="Закрыть" className="popup__close-button">
          Х
        </button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name} novalidate>
          {props.children}
          <button className="popup__submit-button" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}
