// Default Imports
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Redux Imports
import { Store } from './state';

// Components Imports
import NavigationRoutes from './routes';

// Styles Imports
import './styles/styles.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={Store}>
      <NavigationRoutes />
    </Provider>
  </BrowserRouter>
);
