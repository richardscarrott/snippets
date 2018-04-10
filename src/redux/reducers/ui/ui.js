import { combineReducers } from 'redux';
import snackbar from './snackbar/snackbar';

const ui = combineReducers({
  snackbar
});

export default ui;
