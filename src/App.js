import './index.css';

function App() {
  return (
    <div className="page">
      <header class="header">
            <div class="logo"></div>
        </header>
        <main>
            <section class="profile">
                <div class="profile__content">
                    <div class="profile__button"></div>
                    <img src="<%=require('./images/avatar.jpg')%>" class="profile__avatar" />
                    <div class="profile__info">
                        <div class="profile__edit">
                            <h1 class="profile__nickmane">Жак-Ив Кусто</h1>
                            <button aria-label="Редактировать профиль" class="profile__edit-button"></button>
                        </div>
                        <p class="profile__description">Исследователь океана</p>
                    </div>
                </div>
                <button aria-label="Добавить изображение" class="add-button"></button>
            </section>
            <section class="cards">
                <ul class="elements"></ul>
            </section>
        </main>
        <footer class="footer">
            <p class="footer__copyright">© 2022 Mesto Russia</p>
        </footer>
        <div class="popup profile-popup">
            <div class="popup__container">
                <button aria-label="Закрыть" class="popup__close-button">Х</button>
                <h2 class="popup__title">Редактировать профиль</h2>
                <form class="popup__form" id="edit-profile" novalidate>
                    <input autocomplete="off" class="popup__input popup__input_type_name" id="popup__input_name"
                        name="name" placeholder="Имя" type="text" minlength="2" maxlength="40" required />
                    <span class="popup__input-error" id="popup__input_name-error"></span>
                    <input autocomplete="off" class="popup__input popup__input_type_description"
                        id="popup__input_description" name="about" placeholder="Описаине" type="text" minlength="2"
                        maxlength="200" required />
                    <span class="popup__input-error" id="popup__input_description-error"></span>
                    <button class="popup__submit-button" type="submit">Сохранить</button>
                </form>
            </div>
        </div>
        <div class="popup card-popup">
            <div class="popup__container card-popup">
                <button aria-label="Закрыть" class="popup__close-button">Х</button>
                <h2 class="popup__title">Новое место</h2>
                <form class="popup__form" id="add-place" novalidate>
                    <input autocomplete="off" class="popup__input popup__input_type_image-name"
                        id="popup__input_place-name" name="cardName" placeholder="Название" type="text" minlength="2"
                        maxlength="30" required />
                    <span class="popup__input-error" id="popup__input_place-name-error"></span>
                    <input autocomplete="off" class="popup__input popup__input_type_link" id="popup__input_url"
                        name="link" placeholder="Ссылка на картинку" type="url" required />
                    <span class="popup__input-error" id="popup__input_url-error"></span>
                    <button class="popup__submit-button" type="submit">Создать</button>
                </form>
            </div>
        </div>
        <div class="popup image-popup">
            <figure class="image-popup__block">
                <button aria-label="Закрыть" class="popup__close-button">Х</button>
                <img class="image-popup__img" />
                <figcaption class="image-popup__caption"></figcaption>
            </figure>
        </div>
        <div class="popup confirm-popup">
            <div class="popup__container confirm-popup__container">
                <button aria-label="Закрыть" class="popup__close-button">Х</button>
                <h2 class="popup__title popup__title_confirm">Вы уверены?</h2>
                <button class="popup__submit-button popup__submit-button_confirm" type="submit">Да</button>
            </div>
        </div>
        <div class="popup avatar-popup">
            <div class="popup__container">
                <button aria-label="Закрыть" class="popup__close-button">Х</button>
                <h2 class="popup__title">Новое место</h2>
                <form class="popup__form" id="avatar" novalidate>
                    <input autocomplete="off" class="popup__input popup__input_type_link" id="popup__input_avatar-url"
                        name="avatar" placeholder="Ссылка на изображение" type="url" required />
                    <span class="popup__input-error" id="popup__input_avatar-url-error"></span>
                    <button class="popup__submit-button" type="submit">Сохранить</button>
                </form>
            </div>
        </div>
        <template class="template">
            <li class="cards__item element">
                <button aria-label="Удалить карточку" class="element__delete element__delete_visible"></button>
                <img class="element__image" />
                <div class="element__info">
                    <h2 class="element__title"></h2>
                    <div class="element__like-block">
                        <button aria-label="Поставить лайк" class="element__like"></button>
                        <p class="element__count"></p>
                    </div>
                </div>
            </li>
        </template>
    </div>
  );
}

export default App;
