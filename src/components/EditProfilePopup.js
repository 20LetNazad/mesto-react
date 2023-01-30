import PopupWithForm from './PopupWithForm';

export default function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        autoComplete="off"
        className="popup__input popup__input_type_name"
        id="popup__input_name"
        name="name"
        placeholder="Имя"
        type="text"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__input-error" id="popup__input_name-error"></span>
      <input
        autoComplete="off"
        className="popup__input popup__input_type_description"
        id="popup__input_description"
        name="about"
        placeholder="Описаине"
        type="text"
        minLength="2"
        maxLength="200"
        required
      />
      <span
        className="popup__input-error"
        id="popup__input_description-error"
      ></span>
    </PopupWithForm>
  );
}
