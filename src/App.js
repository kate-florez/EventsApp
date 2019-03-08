import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Account/Login/Login";
import Events from "./components/Events/Events";
import Contact from "./components/Contact/Contact";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Bday Web App</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login} />
            <Route path="/events" component={Events}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;