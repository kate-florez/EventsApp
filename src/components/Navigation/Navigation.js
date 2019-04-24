import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import SignOutButton from '../../components/Account/SignOut/SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../../components/Session';

import './Navigation.css';
import logo from '../../images/Logo Shape.png';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'Home'
    };
  }

  onNavClick = event => {
    console.log('event.target.innerHTML', event.target.innerHTML);
    this.setState({ page: event.target.innerHTML });
  }

  render() {
    const { page } = this.state;
    return (
      <div>
        <AuthUserContext.Consumer>
          {authUser =>
            authUser ? <NavigationAuth onNavClick={this.onNavClick} page={page} /> : null
          }
        </AuthUserContext.Consumer>
      </div>
    );
  }
}

const NavigationAuth = (props) => (
  <div className="main-nav">
    <div className="upper">
      <img className="logo" src={logo} alt="Events" />
      <ul className="header">
        <li>
          <NavLink onClick={props.onNavClick} to={ROUTES.HOME}>Home</NavLink>
        </li>
        <li>
          <NavLink onClick={props.onNavClick} to={ROUTES.ACCOUNT}>Account</NavLink>
        </li>
        <li>
          <NavLink onClick={props.onNavClick} to={ROUTES.ADMIN}>Admin</NavLink>
        </li>
        <li>
          <NavLink onClick={props.onNavClick} to={ROUTES.EVENTS}>Events</NavLink>
        </li>
        <li>
          <NavLink onClick={props.onNavClick} to={ROUTES.CONTACT}>Contact</NavLink>
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
    </div>
    <h1 className="current-page">{props.page}</h1>
  </div>
);

const NavigationNonAuth = (props) => (
  <div className="main-nav">
    {/* <ul className="header">
      <li>
        <NavLink onClick={props.onNavClick} to={ROUTES.SIGN_IN}>Sign In</NavLink>
      </li>
    </ul> */}
    <h1 className="current-page">{props.page}</h1>
  </div>
);

export default Navigation;