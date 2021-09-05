import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { ThemeProvider } from '../javascript/contexts/ThemeContext';
import { AuthLayout } from '../javascript/layouts/AuthLayout'
import { Login, Signup } from '../javascript/pages/auth';
import { GlobalStyle } from '../javascript/components/GlobalStyle';
import '../styles/global';

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <AuthLayout>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
        </AuthLayout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
