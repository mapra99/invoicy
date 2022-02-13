import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { GlobalProvider } from '../javascript/contexts/GlobalContext';
import { AuthLayout } from '../javascript/layouts/AuthLayout';
import { ROUTES } from '../javascript/constants';
import { PublicInvoiceDetails } from '../javascript/pages/public/PublicInvoiceDetails'
import '../styles/global';

const { SHOW_INVOICE } = ROUTES.PUBLIC;

const PublicRoutes = () => (
  <Switch>
    <Route exact path={SHOW_INVOICE}>
      <PublicInvoiceDetails />
    </Route>
  </Switch>
);

const App = () => (
  <GlobalProvider>
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  </GlobalProvider>
);

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
