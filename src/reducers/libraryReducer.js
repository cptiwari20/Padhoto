import data from './Library.json';

export default function(state = [], action){
  switch (action.type){
    case 'FETCH_DATA':
      return data;
    default:
      return state;
  }
}