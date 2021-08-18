import { BEATFILMS_URL } from './constants';

const handleResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};


export const getMoviesCardlist = () => {
  return fetch(`${BEATFILMS_URL}`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
  .then(handleResponse);
};