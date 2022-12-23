// Default Imports
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'swiper/css/bundle';
import 'react-circular-progressbar/dist/styles.css';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer
          position='top-right'
          autoClose={2500}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          closeButton={false}
          // pauseOnFocusLoss
          draggable
          // pauseOnHover
          theme='dark'
        />
    </Provider>
  </BrowserRouter>
);
