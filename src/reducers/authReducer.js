export default function(state = {}, action){
  switch (action.type){
    case 'LOGIN':
      return { uid: action.payload.id };
    default:
      return state;
  }
}