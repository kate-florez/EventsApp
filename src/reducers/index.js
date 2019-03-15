import { combineReducers } from 'redux';
import eventsReducer from './events_reducer';

const rootReducer = combineReducers({ 
  events: eventsReducer
  // Add more reducers when needed
});

export default rootReducer;