import React, { useState } from 'react';
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

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [infoPopupTitle, setInfoPopupTitle] = useState({
    title: "Что-то пошло не так! Попробуйте ещё раз.",
  });
  const [isError, setIsError] = useState(false);



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
                component={Movies}/>
            <ProtectedRoute
                exact
                path='/saved-movies'
                loggedIn={loggedIn}
                component={SavedMovies}/>
             <ProtectedRoute
                exact
                path='/profile'
                loggedIn={loggedIn}
                component={Profile}/>
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
