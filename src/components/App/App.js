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
import { AppContext } from '../contexts/AppContext';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as main from '../../utils/MainApi';
import * as mov from '../../utils/MoviesApi';

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
  const [isMovieLoadError, setIsMovieLoadError] = React.useState();
  const [isMovieSending, setIsMovieSending] = React.useState(false);

  useEffect(() => {
    if (loggedIn) {
      main
        .getProfileInfo()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => console.log(err));
      setIsLoading(true);
      setIsMovieLoadError();
      mov
        .getMoviesCardlist()
        .then((moviesData) => {
          // setMovies(moviesData.movies);
          setMovies(moviesData);
          console.log(movies)
        })
        .catch((err) => setIsMovieLoadError(err))
        .finally(() => setIsLoading(false));
    }
  }, [loggedIn]);


  function closeInfoPopup() {
    setIsInfoPopupOpen(false);
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
              isSending={ isMovieSending }
            />
            <ProtectedRoute
              exact
              path='/saved-movies'
              loggedIn={loggedIn}
              component={SavedMovies}
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
