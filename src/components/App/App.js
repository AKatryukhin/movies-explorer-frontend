import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import InfoTooltip from '../InfoTool/InfoTool';
import PageNotFound from '../PageNotFound/PageNotFound';
import { AppContext } from '../contexts/AppContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
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
            <Route path='/movies'>
              <Movies />
            </Route>
            <Route path='/saved-movies'>
              <SavedMovies />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
            {/* <Route path='*'>
              <PageNotFound />
            </Route> */}
            <Route path='*'>
              <InfoTooltip />
            </Route>
          </Switch>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
