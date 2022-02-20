import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import { GlobalProvider } from '../javascript/contexts/GlobalContext';
import { InvoicesProvider } from '../javascript/contexts/InvoicesContext';
import { DashboardLayout } from '../javascript/layouts/DashboardLayout';
import { InvoicesIndex } from '../javascript/pages/dashboard/InvoicesIndex';
import { InvoiceDetails } from '../javascript/pages/dashboard/InvoiceDetails';
import { NewInvoice } from '../javascript/pages/dashboard/NewInvoice';
import { EditInvoice } from '../javascript/pages/dashboard/EditInvoice';
import { ROUTES } from '../javascript/constants';
import { useBreakpoint } from '../javascript/hooks/useBreakpoint';
import '../styles/global';

const { DASHBOARD } = ROUTES;

const DashboardRoutes = () => {
  const location = useLocation();
  const { mobile } = useBreakpoint();
  const background = !mobile && location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route exact path={ROUTES.ROOT}>
          <InvoicesIndex />
        </Route>
        <Route exact path={DASHBOARD.INVOICES_INDEX}>
          <InvoicesIndex />
        </Route>
        <Route exact path={DASHBOARD.NEW_INVOICE}>
          <NewInvoice />
        </Route>
        <Route exact path={DASHBOARD.SHOW_INVOICE}>
          <InvoiceDetails />
        </Route>
        <Route exact path={DASHBOARD.EDIT_INVOICE}>
          <EditInvoice />
        </Route>
      </Switch>

      { background && (
        <>
          <Route exact path={DASHBOARD.NEW_INVOICE}>
            <NewInvoice />
          </Route>
          <Route exact path={DASHBOARD.EDIT_INVOICE}>
            <EditInvoice />
          </Route>
        </>
      )}
    </>
  );
};

const App = () => (
  <GlobalProvider>
    <InvoicesProvider>
      <BrowserRouter>
        <DashboardLayout>
          <DashboardRoutes />
        </DashboardLayout>
      </BrowserRouter>
    </InvoicesProvider>
  </GlobalProvider>
);

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
