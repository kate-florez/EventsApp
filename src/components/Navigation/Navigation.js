import React from 'react';
import { NavLink } from 'react-router-dom';

import SignOutButton from '../../components/Account/SignOut/SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../../components/Session';

import "./Navigation.css";

const Navigation = ({ authUser }) => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <ul className="header">
    <li>
      <NavLink to={ROUTES.HOME}>Home</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.SIGN_IN}>Sign In</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.SIGN_UP}>Sign Up</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.ACCOUNT}>Account</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.EVENTS}>Events</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul className="header">
    <li>
      <NavLink to={ROUTES.SIGN_IN}>Sign In</NavLink>
    </li>
  </ul>
);

export default Navigation;