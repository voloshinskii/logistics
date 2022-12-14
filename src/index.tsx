import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/bootstrap.scss';
import './styles/fonts.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AppNavigation from './navigation';
import {Provider} from "react-redux";
import {store} from "./store";
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
          <BrowserRouter>
            <AppNavigation />
          </BrowserRouter>
      </CookiesProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
