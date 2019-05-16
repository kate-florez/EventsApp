import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../../actions/eventsActions';
import { bindActionCreators } from 'redux';

import Event from './Event';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import './Events.css';

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      layout: 'list'
    };

    this.toggleLayout = this.toggleLayout.bind(this);
  }
  
  componentDidMount() {
    this.props.actions.fetchEvents();
  }

  toggleLayout(layout) {
    this.setState({ layout });
  }

  render() {
    const events = this.props.events.map((event, index) => <Event key={index} event={event} layout={this.state.layout} />);
    return (
      <div className="events-container">
        <div className="events-header">
          <h2>{events.length} Upcoming Events:</h2>
          <div className="display-icons">
            <div name="list" className={`list-icon ${this.state.layout}`} onClick={() => this.toggleLayout('list')}>
              <ViewListIcon name="list" />
            </div>
            <div name="grid" className={`grid-icon ${this.state.layout}`} onClick={() => this.toggleLayout('grid')}>
              <ViewModuleIcon name="grid" />
            </div>
          </div>
        </div>
        <div className={`all-events ${this.state.layout}`}>
          {events}
        </div>
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