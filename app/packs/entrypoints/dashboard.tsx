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
import { GlobalStyle } from '../javascript/components/GlobalStyle';
import '../styles/global';

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <DashboardLayout>
          <Switch>
            <Route exact path="/dashboard/invoices">
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
