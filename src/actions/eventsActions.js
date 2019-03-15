import fetch from 'isomorphic-fetch';

export function fetchEvents() {
  // make api call here using fetch when we connect DB
  return function(dispatch) {
    dispatch({type: 'FETCH_EVENTS'});
  }
}