import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
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
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
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

  function checkLikeStatus(movie) {
    return savedMoviesList.some((i) => i._id === movie._id);
  }

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
      const lastMoviesList = localStorage.getItem('movies');
      !movies && setMovies(lastMoviesList);
    }
  }, [loggedIn, movies]);

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
            setCurrentUser(res);
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
        // setIsRegist(false);
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
        setCurrentUser(res);
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

  function searchMovies(name) {
    const MoviesList = JSON.parse(localStorage.getItem('movies'));
    if (!name) {
      openErrorPopup('Нужно ввести ключевое слово');
      return;
    }
    getMovieslist();
    const list = MoviesList.filter((movie) => {
      const nameEN = movie.nameEN ? movie.nameEN : movie.nameRU;
      return (
        movie.nameRU.toLowerCase().includes(name.toLowerCase()) ||
        movie.description.toLowerCase().includes(name.toLowerCase()) ||
        nameEN.toLowerCase().includes(name.toLowerCase())
      );
    });
    setMovies(list);
    list.length === 0 &&
      setTimeout(() => openErrorPopup('Ничего не найдено'), 1200);
    return list;
  }

  function filterShortMovies(movies) {
    const shortMovies = movies.filter((movie) => movie.duration <= 40);
    return shortMovies;
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

  // function handleDeleteSavedMovie(movie) {
  //   mainApi.movieDelete(movie.movieId)
  //     .then(() => {
  //       setSavedMovies((movies) => movies.filter((film) => film.movieId !== movie.movieId))
  //       updateToSaveMovies(movie.movieId)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // function handlesavedMovie(movie) {
  //   const id = movie.id || movie.movieId;
  //   const isLiked = savedMovies.some(item => item.movieId === id && item.owner === currentUser.id);
  //   mainApi.changeSaveMovieStatus(movie, isLiked)
  //     .then((newMovie) => {
  //       handleSavedMovies()
  //       setMovies((films) =>
  //         films.map((film) => (
  //           film.id === movie.movieId ? newMovie : film))
  //       );
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

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
        setSavedMoviesList([res.movie, ...savedMoviesList]);
        localStorage.setItem(
          'savedMoviesList',
          JSON.stringify(savedMoviesList)
        );
        console.log(savedMoviesList);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleMovieDelete(movie) {
    console.log(movie);
    console.log(savedMoviesList);
    const movieForDelete = savedMoviesList.find((i) => i.movieId === movie.id);
    console.log(movieForDelete);
    main.getUserMovies()
      .then((res) => {
        console.log(res)
        main
          .deleteMovie(movieForDelete._id)
          .then((res) => {
            // setSavedMovies((state) => state.filter((c) => c.id !== movie.id));
            // localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
  }
  // function removeMovies(movie) {
  //     const movieId = savedMovies.find(
  //         (item) => item.movieId === movie.movieId
  //     )._id;
  //     deleteMovie(movieId)
  //         .then((res) => {
  //             getFavoriteMovies();
  //             console.log(res.message);
  //         })
  //         .catch((err) => console.log(err));
  // }

  // function handleUpdateUser(userData) {
  //     updateProfile(userData)
  //         .then((res) => {
  //             if (res) {
  //                 setCurrentUser({
  //                     ...currentUser,
  //                     name: res.newName,
  //                     email: res.newEmail,
  //                 });
  //                 showResponseMessageTimer(SUCCSESS_UPDATE_MESSAGE);
  //             }
  //         })
  //         .catch((err) => {
  //             showResponseMessageTimer(SERVER_ERROR_MESSAGE);
  //             console.log(err);
  //         });
  // }

  // function handleLogOut() {
  //     localStorage.removeItem("jwt");
  //     localStorage.removeItem("movies");
  //     localStorage.removeItem("searchResult");
  //     setCurrentUser({ name: "", email: "" });
  //     setAllmovies([]);
  //     setSearchMoviesResult([]);
  //     setMoviesSearchResponse([]);
  //     setSavedMovies([]);
  //     setLoggedIn(false);
  //     history.push("/");
  // }

  // function addMovie(movie) {
  //     createMovie(movie)
  //         .then((res) => {
  //             const newSavedMovie = res.newMovie;
  //             setSavedMovies([...savedMovies, newSavedMovie]);
  //             console.log(res.message);
  //         })
  //         .catch((err) => console.log(err));
  // }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <AppContext.Provider
        value={{
          userData: userData,
          loggedIn: loggedIn,
          isLoading: isLoading,
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
              // isSearch={handleSearch}
              movies={movies}
              getMovies={searchMovies}
              onMovieLike={handleSavedMovie}
              onMovieDelete={handleMovieDelete}
              checkLikeStatus={checkLikeStatus}
            />
            <ProtectedRoute
              exact
              path='/saved-movies'
              loggedIn={loggedIn}
              component={SavedMovies}
              onMovieDelete={handleMovieDelete}
            />
            <ProtectedRoute
              exact
              path='/profile'
              loggedIn={loggedIn}
              component={Profile}
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
