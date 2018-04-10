import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import entities from './entities/entities';
import sources from './sources/sources';
import ui from './ui/ui';

const rootReducer = combineReducers({
  entities,
  sources,
  form,
  ui
});

export default rootReducer;
