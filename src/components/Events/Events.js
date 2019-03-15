import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../../actions/eventsActions';
import { bindActionCreators } from 'redux';
 
class Events extends Component {
  componentDidMount() {
    this.props.actions.fetchEvents();
  }

  render() {
    const events = this.props.events.map(event => 
      <div>
        <div>{event.name}</div>
        <div>{event.date}</div>
      </div>  
    );

    return (
      <div>
        <h2>Events</h2>
        <p>Upcoming events are:</p>
        {events}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { events: state.events };
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Events);