import React, {Component} from 'react';
import {Home} from '../pages/Home';
import {ProductPage} from '../pages/ProductPage';
import {AboutPage} from '../pages/AboutPage';
import {ErrorPage} from '../pages/ErrorPage';
import {Route, Routes} from 'react-router-dom';

export const AppRouter = () => {
  const publicRoutes = [
    {
      path: '/',
      element: Home,
    },
    {
      path: `/glassware/:id`,
      element: ProductPage,
    },
    {
      path: '/aboutPage',
      element: AboutPage,
    },
    {
      path: '/*',
      element: ErrorPage,
    },
  ];

  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
};
