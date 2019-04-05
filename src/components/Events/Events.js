import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../../actions/eventsActions';
import { bindActionCreators } from 'redux';

import Event from './Event';
 
class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      horizontal: true
    };
  }
  
  componentDidMount() {
    this.props.actions.fetchEvents();
  }

  render() {
    const events = this.props.events.map((event, index) => <Event key={index} event={event} />);
    return (
      <div>
        <h2>{events.length} Upcoming Events:</h2>
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