import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../../Firebase';
import * as ROUTES from '../../../constants/routes';

class SignOutButton extends Component {

  constructor(props) {
    super(props);
  }

  onSubmit = event => {

    console.log('this.props', this.props);

    this.props.firebase
      .doSignOut()
      .then(() => {
        this.props.history.push(ROUTES.LANDING);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    return (
      <button type="button" onClick={this.onSubmit}>
        Sign Out
      </button>
    )
  }
}

const SignOutForm = compose(
  withRouter,
  withFirebase,
)(SignOutButton);

export default SignOutForm;