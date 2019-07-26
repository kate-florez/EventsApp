import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from './components/Navigation/Navigation';
// import HomePage from './components/Home/Home';
import SignUpPage from './components/Account/SignUp/SignUp';
import SignInPage from './components/Account/SignIn/SignIn';
import PasswordForgetPage from './components/Account/PasswordForget/PasswordForget';
import AccountPage from './components/Account/Account';
import Admin from './components/Account/Admin/Admin';
import EventsPage from "./components/Events/Events";
import ContactPage from "./components/Contact/Contact";

import * as ROUTES from './constants/routes';
import { withAuthentication } from './components/Session';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const App = () => {
  const palette = {
    cta1: '#000',
    background: '#fff',
  };
  const typography = {
    fontFamily: 'arial',
  };

  const theme = createMuiTheme({
    palette, typography,
  });
  return(
    <Router>
      <MuiThemeProvider theme={theme}>
        <div>
          <Navigation />

          <div className="content">
            <Route exact path={ROUTES.LANDING} component={SignInPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={Admin} />
            <Route path={ROUTES.EVENTS} component={EventsPage} />
            <Route path={ROUTES.CONTACT} component={ContactPage} />
          </div>
        </div>
      </MuiThemeProvider>
    </Router>
  );
}

export default withAuthentication(App);