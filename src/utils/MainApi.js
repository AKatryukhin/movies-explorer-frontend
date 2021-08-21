import { BASE_URL } from './constants';

const handleResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

export const register = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then(handleResponse);
};

export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
};

export const getProfileInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(handleResponse)
    .then((data) => data);
};

export const setProfileInfo = ({ name, about }) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then(handleResponse);
};

export const addCard = ({ name, link }) => {
  return fetch(`${BASE_URL}/cards`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then(handleResponse);
};

export const removeCard = (id) => {
  return fetch(`${BASE_URL}/cards/${id}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(handleResponse);
};

export const changeLikeCardStatus = (id, isLiked) => {
  return fetch(`${BASE_URL}/cards/${id}/likes`, {
    method: isLiked ? 'DELETE' : 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(handleResponse);
};

export const updateProfile = ({ name, email }) => {
  const token = localStorage.getItem('jwt');
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ email: email, name: name }),
  }).then(handleResponse);
};

export const createMovie = (data) => {
  // const token = localStorage.getItem("jwt");
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: data.image,
      trailer: data.trailerLink,
      thumbnail: data.image.formats.thumbnail.url,
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
    }),
  }).then(handleResponse);
};

export const deleteMovie = (movieId) => {
  // const token = localStorage.getItem("jwt");
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    // credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
};

export const getUserMovies = () => {
  // const token = localStorage.getItem('jwt');
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
};
