export default function Main(props) {
  return (
    <main>
      <section className="profile">
        <div className="profile__content">
          <div className="profile__button" onClick={props.onEditAvatar}></div>
          <img src="" className="profile__avatar" />
          <div className="profile__info">
            <div className="profile__edit">
              <h1 className="profile__nickmane">Жак-Ив Кусто</h1>
              <button
                aria-label="Редактировать профиль"
                className="profile__edit-button"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__description">Исследователь океана</p>
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
