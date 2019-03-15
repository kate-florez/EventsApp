export default function eventsReducer(state = [
  { name: 'test 1 name', date: 'test 1 date' },
  { name: 'test 2 name', date: 'test 2 date' },
  { name: 'test 3 name', date: 'test 3 date' },
], action) {
  switch(action.type) {
    default:
      return state;
  }
}