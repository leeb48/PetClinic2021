import * as React from 'react';
import { Route, Switch } from 'react-router';
import ModalContainer from './app/common/modal/ModalContainer';
import Navbar from './app/layout/Navbar';
import HomePage from './features/home/HomePage';
import RegisterForm from './features/users/RegisterForm';

export const App = () => {
  return (
    <>
      <Navbar />
      <ModalContainer />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/register' component={RegisterForm} />
      </Switch>
    </>
  );
};
