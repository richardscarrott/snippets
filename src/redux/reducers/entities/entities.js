import { combineReducers } from 'redux';
import sources from './sources/sources';
import dirs from './dirs/dirs';
import files from './files/files';

const entities = combineReducers({
  sources,
  dirs,
  files
});

export default entities;
