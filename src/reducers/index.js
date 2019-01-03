import { combineReducers } from 'redux';
import authReducer from './authReducer';
import libraryReducer from './libraryReducer';

export default combineReducers({
  auth: authReducer,
  library: libraryReducer
});