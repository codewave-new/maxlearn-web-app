/**
 * Global file for all routes
 */

import React from 'react';
import Home from '../pages/home';
import Login from '../pages/login';
import Layout from '../components/Layout/Layout';
import ProtectedRoute from './privateRoute';
import Todo from '../pages/todo';
import Rangings from '../pages/rangings';
import Learn from '../pages/learn';

export const appRoutes = [
  {
    // routes with Layout
    element: <Layout />,
    children: [
      {
        // protected routes
        element: <ProtectedRoute />,
        children: [
          {
            path: '/some-route-with-layout-protected',
            element: <p>Some route with layout and protected</p>,
          },
        ],
      },
      // unprotected routes
      {
        path: '/some-route-without-layout-protected',
        element: <p>Some route without layout and protected</p>,
      },
    ],
  },
  // routes w/o Layout
  {
    // protected routes
    element: <ProtectedRoute />,
    children: [
      {
        path: '/some-route-only-protected',
        element: <p>Some route with only protected</p>,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/to-do',
        element: <Todo />,
      },
      {
        path: '/rankings',
        element: <Rangings />,
      },
      {
        path: '/learn',
        element: <Learn />,
      },
    ],
  },
  // unprotected routes
  {
    path: '/some-route-public',
    element: <p>Public Route</p>,
  },
  {
    path: '/login',
    element: <Login />,
  },
];
