import Api from '../components/Api';

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-55',
  userId: '5c67497edf177b6be73287c3',
  headers: {
    authorization: '96508db4-2bdb-409e-a863-4987f404d514',
    'Content-Type': 'application/json',
  },
});

export default api;
