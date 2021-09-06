import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { ThemeProvider } from '../javascript/contexts/ThemeContext';
import { DashboardLayout } from '../javascript/layouts/DashboardLayout';
import { Index as InvoicesIndex } from '../javascript/pages/dashboard/invoices';
import { ROUTES } from '../javascript/constants';
import '../styles/global';

const { DASHBOARD: DASHBOARD_ROUTES } = ROUTES

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <DashboardLayout>
          <Switch>
            <Route exact path={DASHBOARD_ROUTES.INVOICES_INDEX}>
              <InvoicesIndex />
            </Route>
          </Switch>
        </DashboardLayout>
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
