import React from 'react';
import { NavLink } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

import "./Navigation.css"

const Navigation = () => (
  <div>
    <ul class="header">
      <li>
        <NavLink to={ROUTES.HOME}>Home</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.SIGN_IN}>Sign In</NavLink>
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
    </ul>
  </div>
);

export default Navigation;