import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import InfoPopup from '../InfoPopup/InfoPopup';
import PageNotFound from '../PageNotFound/PageNotFound';
import { AppContext } from '../../contexts/AppContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as main from '../../utils/MainApi';
import * as mov from '../../utils/MoviesApi';
import { ESC_KEYCODE } from '../../utils/constants';

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isShortSasvedMovies, setIsShortSasvedMovies] = useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [infoPopupTitle, setInfoPopupTitle] = useState({
    title: 'Что-то пошло не так! Попробуйте ещё раз.',
  });
  const [isError, setIsError] = useState(false);
  const [isMovieLoadError, setIsMovieLoadError] = useState();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  function handleInfoPopupClick() {
    setIsInfoPopupOpen(true);
  }

  function openErrorPopup(title) {
    handleInfoPopupClick();
    setIsError(true);
    setInfoPopupTitle({ title });
  }

  function openSuccessPopup(title) {
    handleInfoPopupClick();
    setIsError(false);
    setInfoPopupTitle({ title });
  }

  useEffect(() => {
    if (loggedIn) {
      Promise.all([main.getProfileInfo(), main.getUserMovies()])
        .then(([currentUserData, currentSavedMovies]) => {
          setCurrentUser(currentUserData);
          setSavedMovies(currentSavedMovies.movies);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      const lastSearchList = JSON.parse(localStorage.getItem('lastSearchList'));
      lastSearchList && setMovies(lastSearchList);
    }
  }, [loggedIn]);

  function checkLikeStatus(movie) {
    if (movie) {
      return savedMovies.some(
        (i) => i.movieId === movie.id && i.owner === currentUser._id
      );
    }
  }

  const handleRegister = ({ name, email, password }, onSuccess) => {
    main
      .register({ name, email, password })

      .then((res) => {
        setUserData({
          name: res.name,
          email: res.email,
        });
        setCurrentUser(res);
        openSuccessPopup('Вы успешно зарегистрировались!');
        onSuccess();
        main
          .authorize({ email, password })
          .then((res) => {
            setUserData({
              email: res.email,
            });
            setLoggedIn(true);
            onSuccess();
            history.push('/movies');
          })
          .catch((err) => {
            console.log(err);
            openErrorPopup('Что-то пошло не так! Попробуйте ещё раз.');
          });
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
        openErrorPopup('Что-то пошло не так! Попробуйте ещё раз.');
      });
  };

  const handleLogin = ({ email, password }, onSuccess) => {
    main
      .authorize({ email, password })
      .then((res) => {
        setUserData({
          email: res.email,
        });
        setLoggedIn(true);
        onSuccess();
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
        openErrorPopup('Что-то пошло не так! Попробуйте ещё раз.');
      });
  };

  function getMovieslist() {
    if (loggedIn) {
      setIsLoading(true);
      mov
        .getMoviesCardlist()
        .then((moviesData) => {
          localStorage.setItem('movies', JSON.stringify(moviesData));
        })
        .catch((err) => {
          setIsMovieLoadError(err);
          openErrorPopup(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  function searchSavedMovies(name) {
    const savedMoviesList = JSON.parse(localStorage.getItem('savedMoviesList'));
    if (!name) {
      openErrorPopup('Нужно ввести ключевое слово');
      return;
    }
    const searchSavedMoviesList = savedMoviesList.filter((movie) => {
      const nameEN = movie.nameEN ? movie.nameEN : movie.nameRU;
      return (
        movie.nameRU.toLowerCase().includes(name.toLowerCase()) ||
        movie.description.toLowerCase().includes(name.toLowerCase()) ||
        nameEN.toLowerCase().includes(name.toLowerCase())
      );
    });
    setSavedMovies(searchSavedMoviesList);
  }

  function searchMovies(name) {
    getMovieslist();
    const MoviesList = JSON.parse(localStorage.getItem('movies'));
    if (!name) {
      openErrorPopup('Нужно ввести ключевое слово');
      return;
    }
    const lastSearchList = MoviesList.filter((movie) => {
      const nameEN = movie.nameEN ? movie.nameEN : movie.nameRU;
      return (
        movie.nameRU.toLowerCase().includes(name.toLowerCase()) ||
        movie.description.toLowerCase().includes(name.toLowerCase()) ||
        nameEN.toLowerCase().includes(name.toLowerCase())
      );
    });
    setMovies(lastSearchList);
    localStorage.setItem('lastSearchList', JSON.stringify(lastSearchList));
    lastSearchList.length === 0 &&
      setTimeout(() => openErrorPopup('Ничего не найдено'), 1200);
    return lastSearchList;
  }

  function closeInfoPopup() {
    setIsInfoPopupOpen(false);
  }

  useEffect(() => {
    //функция закрытия попапа по Escape
    function handleEscClose(evt) {
      evt.key === ESC_KEYCODE && closeInfoPopup();
    }

    //функция закрытия попапа по оверлей
    function handleOverlayClose(evt) {
      evt.target.classList.contains('popup-info_opened') && closeInfoPopup();
    }

    window.addEventListener('keydown', handleEscClose);
    window.addEventListener('click', handleOverlayClose);

    return () => {
      window.removeEventListener('click', handleOverlayClose);
      window.removeEventListener('keydown', handleEscClose);
    };
  }, []);

  function handleSavedMovie(movie) {
    main
      .createMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailer: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
      .then((res) => {
        const NewSavedMovies = [res.movie, ...savedMovies];
        setSavedMovies(NewSavedMovies);
        localStorage.setItem('savedMoviesList', JSON.stringify(NewSavedMovies));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleMovieDelete(movie) {
    const movieForDelete = savedMovies.find((i) => i.movieId === movie.id);
    main
      .deleteMovie(movieForDelete._id)
      .then((res) => {
        const NewSavedMovies = savedMovies.filter(
          (i) => i.movieId !== movie.id
        );
        // setSavedMovies((state) => state.filter((i) => i.movieId !== movie.id));
        setSavedMovies(NewSavedMovies);
        localStorage.setItem('savedMoviesList', JSON.stringify(NewSavedMovies));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSavedMovieDelete(movie) {
    main
      .deleteMovie(movie._id)
      .then((res) => {
        setSavedMovies((state) => state.filter((i) => i._id !== movie._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleToggleShortSavedMovies() {
    !isShortSasvedMovies
      ? setIsShortSasvedMovies(true)
      : setIsShortSasvedMovies(false);
  }

  function handleToggleShortMovies() {
    !isShortMovies ? setIsShortMovies(true) : setIsShortMovies(false);
  }

  useEffect(() => {
    const lastSearchList = JSON.parse(localStorage.getItem('lastSearchList'));
    isShortMovies
      ? setMovies((state) => state.filter((i) => i.duration <= 40))
      : setMovies(lastSearchList);
  }, [isShortMovies]);

  useEffect(() => {
    const savedMoviesList = JSON.parse(localStorage.getItem('savedMoviesList'));
    isShortSasvedMovies
      ? setSavedMovies((state) => state.filter((i) => i.duration <= 40))
      : setSavedMovies(savedMoviesList);
  }, [isShortSasvedMovies]);

  function handleUpdateProfile({ name, email }) {
    setIsLoading(true);
    main
      .setProfileInfo({ name, email })
      .then((res) => {
        if (res) {
          setCurrentUser({
            ...currentUser,
            name: res.name,
            email: res.email,
          });
          openSuccessPopup('Данные успешно обновлены!');
        }
      })
      .catch((err) => {
        openErrorPopup('Что-то пошло не так! Попробуйте ещё раз.');
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSignOut(email) {
    main
      .logout(email)
      .then(() => {
        setLoggedIn(false);
        setCurrentUser({ name: '', email: '' });
        localStorage.removeItem('movies');
        localStorage.removeItem('lastSearchList');
        setMovies([]);
        setSavedMovies([]);
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <AppContext.Provider
        value={{
          userData: userData,
          loggedIn: loggedIn,
          isLoading: isLoading,
          savedMovies: savedMovies,
          movies: movies,
        }}
      >
        <div className='page'>
          <Switch>
            <Route path='/signin'>
              <Login handleLogin={handleLogin} />
            </Route>
            <Route path='/signup'>
              <Register handleRegister={handleRegister} />
            </Route>
            <Route exact path='/'>
              <Main />
            </Route>
            <ProtectedRoute
              exact
              path='/movies'
              loggedIn={loggedIn}
              component={Movies}
              isLoading={isLoading}
              setIsShortMovies={handleToggleShortMovies}
              getMovies={searchMovies}
              onMovieLike={handleSavedMovie}
              onMovieDelete={handleMovieDelete}
              checkLikeStatus={checkLikeStatus}
            />
            <ProtectedRoute
              exact
              path='/saved-movies'
              component={SavedMovies}
              isLoading={isLoading}
              loggedIn={loggedIn}
              onMovieDelete={handleSavedMovieDelete}
              checkLikeStatus={checkLikeStatus}
              setIsShortMovies={handleToggleShortSavedMovies}
              getMovies={searchSavedMovies}
            />
            <ProtectedRoute
              exact
              path='/profile'
              loggedIn={loggedIn}
              logout={handleSignOut}
              component={Profile}
              onUpdateUser={handleUpdateProfile}
            />
            <Route path='*'>
              <PageNotFound />
            </Route>
          </Switch>
          <InfoPopup
            isOpen={isInfoPopupOpen}
            onClose={closeInfoPopup}
            title={infoPopupTitle.title}
            isError={isError}
          />
        </div>
      </AppContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
