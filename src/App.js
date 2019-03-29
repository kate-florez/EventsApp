import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from './components/Navigation/Navigation';
import HomePage from './components/Home/Home';
import SignUpPage from './components/Account/SignUp/SignUp';
import SignInPage from './components/Account/SignIn/SignIn';
import PasswordForgetPage from './components/Account/SignUp/SignUp';
import AccountPage from './components/Account/SignUp/SignUp';
import EventsPage from "./components/Events/Events";
import ContactPage from "./components/Contact/Contact";

import * as ROUTES from './constants/routes';
import { withAuthentication } from './components/Session';

const App = () => (
  <Router>
    <div>
      <h1>Events Web App</h1>
      <Navigation />
      <div className="content">
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.EVENTS} component={EventsPage} />
        <Route path={ROUTES.CONTACT} component={ContactPage} />
      </div>
    </div>
  </Router>
);

export default withAuthentication(App);