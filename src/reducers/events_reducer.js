export default function eventsReducer(state = [
  { 
    name: 'Andrews Birthday Fest!', 
    date: 'April 14, 2019',
    img: '',
    address: '124 Awesome Street, Cool Town, NJ, 07676'
  },
  { 
    name: 'Andrews Birthday Fest!', 
    date: 'April 14, 2019',
    img: '',
    address: '124 Awesome Street, Cool Town, NJ, 07676'
  },
  { 
    name: 'Andrews Birthday Fest!', 
    date: 'April 14, 2019',
    img: '',
    address: '124 Awesome Street, Cool Town, NJ, 07676'
  },
], action) {
  switch(action.type) {
    default:
      return state;
  }
}