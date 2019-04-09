import React, { Component } from "react";

import { withAuthorization } from '../Session';
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome</h2>
        <p>The Home Page is accessible by every signed in user.</p>
      </div>
    );
  }
}
 
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);