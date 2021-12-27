import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import { GlobalProvider } from '../javascript/contexts/GlobalContext';
import { InvoicesProvider } from '../javascript/contexts/InvoicesContext';
import { DashboardLayout } from '../javascript/layouts/DashboardLayout';
import { InvoicesIndex } from '../javascript/pages/dashboard/InvoicesIndex';
import { NewInvoice } from '../javascript/pages/dashboard/NewInvoice';
import { ROUTES } from '../javascript/constants';
import { useBreakpoint } from '../javascript/hooks/useBreakpoint';
import '../styles/global';

const { DASHBOARD: DASHBOARD_ROUTES } = ROUTES

const DashboardRoutes = () => {
  const location = useLocation();
  const { mobile } = useBreakpoint();
  const background = !mobile && location.state && location.state.background;

  return (
    <>
      <Switch location={background || location} >
        <Route exact path={ROUTES.ROOT} children={<InvoicesIndex />} />
        <Route exact path={DASHBOARD_ROUTES.INVOICES_INDEX} children={<InvoicesIndex />} />
        <Route exact path={DASHBOARD_ROUTES.NEW_INVOICE} children={<NewInvoice />} />
      </Switch>

      { background && <Route exact path={DASHBOARD_ROUTES.NEW_INVOICE} children={<NewInvoice />} /> }
    </>
  )
}

const App = () => {
  return (
    <GlobalProvider>
      <InvoicesProvider>
        <BrowserRouter>
          <DashboardLayout>
            <DashboardRoutes />
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
