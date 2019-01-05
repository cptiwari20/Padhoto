import { combineReducers } from 'redux';
import authReducer from './authReducer';
import libraryReducer from './libraryReducer';
import selectedLibrary from './selectedLibrary';

export default combineReducers({
  auth: authReducer,
  library: libraryReducer,
  selectedId: selectedLibrary
});