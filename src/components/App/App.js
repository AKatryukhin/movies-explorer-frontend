import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { AppContext } from '../contexts/AppContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <AppContext.Provider
        value={{
          loggedIn: loggedIn,
        }}
      >
          <div className='page'>
            <Header />
            <Switch>
              {/* <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route> */}
              <Route exact path='/'>
                <Main />
              </Route>
              {/* <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route> */}
            </Switch>
            {/* <Footer />   */}
          </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
