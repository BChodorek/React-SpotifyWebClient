import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from 'routes';
import LoginPage from 'views/LoginPage';
import HomePage from 'views/HomePage';
import AuthPage from 'views/AuthPage';
import StyleProvider from 'theme/StyleProvider';

const Root = () => {
  return (
    <BrowserRouter>
      <StyleProvider>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route path="/login" component={LoginPage} />
          <Route path="/auth" component={AuthPage} />
          <ProtectedRoute path="/home" component={HomePage} />
        </Switch>
      </StyleProvider>
    </BrowserRouter>
  );
};

export default Root;
