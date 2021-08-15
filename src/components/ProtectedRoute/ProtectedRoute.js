import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';

/*jshint -W119*/
const ProtectedRoute = ({ component: Component, ...props }) => {
  /*jshint +W119*/
  const value = React.useContext(AppContext);

  return (
    <Route>
      {() =>
        value.loggedIn ? <Component {...props} /> : <Redirect to='/signin' />
      }
    </Route>
  );
};

export default ProtectedRoute;
