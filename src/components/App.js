import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="page">
        <Header />
        <Main />
        <Footer />
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
        <div className="popup image-popup">
            <figure className="image-popup__block">
                <button aria-label="Закрыть" className="popup__close-button">Х</button>
                <img className="image-popup__img" />
                <figcaption className="image-popup__caption"></figcaption>
            </figure>
        </div>
        <div className="popup confirm-popup">
            <div className="popup__container confirm-popup__container">
                <button aria-label="Закрыть" className="popup__close-button">Х</button>
                <h2 className="popup__title popup__title_confirm">Вы уверены?</h2>
                <button className="popup__submit-button popup__submit-button_confirm" type="submit">Да</button>
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
        <template className="template">
            <li className="cards__item element">
                <button aria-label="Удалить карточку" className="element__delete element__delete_visible"></button>
                <img className="element__image" />
                <div className="element__info">
                    <h2 className="element__title"></h2>
                    <div className="element__like-block">
                        <button aria-label="Поставить лайк" className="element__like"></button>
                        <p className="element__count"></p>
                    </div>
                </div>
            </li>
        </template>
    </div>
  );
}

export default App;
