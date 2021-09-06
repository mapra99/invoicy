import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { GlobalProvider } from '../javascript/contexts/GlobalContext';
import { AuthLayout } from '../javascript/layouts/AuthLayout'
import { Login, Signup } from '../javascript/pages/auth';
import { ROUTES } from '../javascript/constants';
import '../styles/global';

const { AUTH: AUTH_ROUTES } = ROUTES

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <AuthLayout>
          <Switch>
            <Route exact path={AUTH_ROUTES.SIGN_IN}>
              <Login />
            </Route>
            <Route exact path={AUTH_ROUTES.SIGN_UP}>
              <Signup />
            </Route>
          </Switch>
        </AuthLayout>
      </BrowserRouter>
    </GlobalProvider>
  )
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
