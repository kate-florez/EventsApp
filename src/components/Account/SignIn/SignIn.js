import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { SignUpLink } from '../SignUp/SignUp';
import { PasswordForgetLink } from '../PasswordForget/PasswordForget';
import { withFirebase } from '../../Firebase';
import * as ROUTES from '../../../constants/routes';

import "./SignIn.css";
import logo from "../../../images/logo-color.png";

const SignInPage = () => (
  <div className="wrapper">
    <div className="wrapper-signin">
      <img className="logo" src={logo} alt="events-logo" />
      <h1 className="title">Sign In</h1>
      <SignInForm />
      <PasswordForgetLink />
      <hr/>
      <SignUpLink />
    </div>
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.EVENTS);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {

    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <TextField
          id="filled-email-input"
          className="textField"
          label="Email"
          name="email"
          value={email}
          onChange={this.onChange}
          type="email"
          placeholder="Email Address"
          autoComplete="email"
          margin="normal"
          variant="filled"
          autoFocus
          fullWidth />
        <TextField
          id="filled-password-input"
          className="textField"
          label="Password"
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
          autoComplete="email"
          margin="normal"
          variant="filled"
          fullWidth />
        <Button 
          className="signinButton"
          variant="contained" 
          color="primary"
          block
          disabled={isInvalid} 
          type="submit"
          fullWidth>
          Sign In
        </Button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };