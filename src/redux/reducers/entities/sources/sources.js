import { ADD_SOURCE_SUCCEEDED } from '../../../actions/add-source/add-source';
import { REFRESH_SOURCE_SUCCEEDED } from '../../../actions/refresh-source/refresh-source';

const sources = (state = {}, action) => {
  switch (action.type) {
    case ADD_SOURCE_SUCCEEDED:
    case REFRESH_SOURCE_SUCCEEDED:
      return {
        ...state,
        ...action.payload.entities.sources
      };
    default:
      return state;
  }
};

export default sources;
