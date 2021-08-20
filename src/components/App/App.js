import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
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
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [infoPopupTitle, setInfoPopupTitle] = useState({
    title: 'Что-то пошло не так! Попробуйте ещё раз.',
  });
  const [isError, setIsError] = useState(false);
  const [isMovieLoadError, setIsMovieLoadError] = useState();
  const[isLiked, setIsLiked] = useState(false);
  // const [isMovieSending, setIsMovieSending] = React.useState(false);

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
          openErrorPopup('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
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
      list.length === 0 && setTimeout(() => openErrorPopup('Ничего не найдено'), 1200);
      return list;
    }
  

    function filterShortMovies(movies) {
      const shortMovies = movies.filter(
          (movie) => movie.duration <= 40
      );
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

  function handleMovieLike(movie) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    // const isLiked = savedMovies.some((i) => i === currentUser._id);
    // Отправляем запросы в API и получаем обновлённые данные карточки
    main
      .createMovie(movie)
      // .getUserMovies()
      
      .then((moviesData) => {
        localStorage.setItem('savedMovies', JSON.stringify(moviesData));
        setIsLiked(true);
      }
    )
      // .changeLikeCardStatus(card._id, isLiked)
      // .then((newCardSomeLike) => {
      //   setCards((state) =>
      //     state.map((c) => (c._id === card._id ? newCardSomeLike : c))
      //   );
      // })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleMovieDelete(movie) {
    main
      .deleteMovie(movie.id)
        .getUserMovies()
        .then((moviesData) => {
          localStorage.setItem('savedMovies', JSON.stringify(moviesData));
        })
          //   () => {
          // setCards((state) => state.filter((c) => c._id !== cardForDelete._id));
          // setIsDeleteCardPopupOpen(false);
          //   }
        // )
        .catch((err) => {
          console.log(err);
        });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <AppContext.Provider
        value={{
          loggedIn: loggedIn,
          isLoading: isLoading,
        }}
      >
        <div className='page'>
          <Switch>
            <Route path='/signin'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Register />
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
              onMovieLike={handleMovieLike}
              onMovieDelete={handleMovieDelete}
              isLiked={isLiked}
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
