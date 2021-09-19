import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { GlobalProvider } from '../javascript/contexts/GlobalContext';
import { InvoicesProvider } from '../javascript/contexts/InvoicesContext';
import { DashboardLayout } from '../javascript/layouts/DashboardLayout';
import { InvoicesIndex } from '../javascript/pages/dashboard/InvoicesIndex';
import { ROUTES } from '../javascript/constants';
import '../styles/global';

const { DASHBOARD: DASHBOARD_ROUTES } = ROUTES

const App = () => {
  return (
    <GlobalProvider>
      <InvoicesProvider>
        <BrowserRouter>
          <DashboardLayout>
            <Switch>
              <Route exact path={ROUTES.ROOT}>
                <InvoicesIndex />
              </Route>
              <Route exact path={DASHBOARD_ROUTES.INVOICES_INDEX}>
                <InvoicesIndex />
              </Route>
            </Switch>
          </DashboardLayout>
        </BrowserRouter>
      </InvoicesProvider>
    </GlobalProvider>
  )
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
