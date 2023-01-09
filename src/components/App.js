import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  return (
    <div className="page">
        <Header />
        <Main />
        <Footer />
        <PopupWithForm />
        <ImagePopup />
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
