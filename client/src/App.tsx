import * as React from 'react';
import { Route } from 'react-router';
import Navbar from './app/layout/Navbar';
import HomePage from './features/home/HomePage';

export const App = () => {
  return (
    <>
      <Navbar />
      <Route path='/' component={HomePage} />
    </>
  );
};
