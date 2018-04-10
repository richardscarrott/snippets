import { ADD_SOURCE_SUCCEEDED } from '../../../actions/add-source/add-source';

const data = (state = [], action) => {
  switch (action.type) {
    case ADD_SOURCE_SUCCEEDED:
      return [...state, ...action.payload.result];
    default:
      return state;
  }
};

export default data;
