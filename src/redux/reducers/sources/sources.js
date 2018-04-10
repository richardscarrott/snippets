import { combineReducers } from 'redux';
import meta from './meta/meta';
import data from './data/data';

export default combineReducers({
  meta,
  data
});
