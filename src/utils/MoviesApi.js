import { BEATFILMS_URL } from './constants';

const handleResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};


export const getMoviesCardlist = () => {
  return fetch(`${BEATFILMS_URL}/beatfilm-movies`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(handleResponse);
};