import {
  ADD_SOURCE_REQUESTED,
  ADD_SOURCE_SUCCEEDED,
  ADD_SOURCE_FAILED
} from '../../../actions/add-source/add-source';
import {
  REFRESH_SOURCE_REQUESTED,
  REFRESH_SOURCE_SUCCEEDED,
  REFRESH_SOURCE_FAILED
} from '../../../actions/refresh-source/refresh-source';
import {
  SOURCE_DELETED,
  SOURCE_DELETED_UNDONE
} from '../../../actions/delete-source/delete-source';

/**
 * `status` follows CRUD naming convention, e.g.
 * 'CREATING', 'READING', 'UPDATING', 'DELETING' to allow
 * various components to show a loading depending on the
 * operation.
 */
const meta = (state = {}, action) => {
  switch (action.type) {
    case ADD_SOURCE_REQUESTED:
      return {
        ...state,
        [action.meta.id]: {
          ...state[action.meta.id],
          status: 'CREATING'
        }
      };
    case REFRESH_SOURCE_REQUESTED:
      return {
        ...state,
        [action.meta.id]: {
          ...state[action.meta.id],
          status: 'READING'
        }
      };
    case ADD_SOURCE_SUCCEEDED:
    case REFRESH_SOURCE_SUCCEEDED:
      return {
        ...state,
        [action.meta.id]: {
          ...state[action.meta.id],
          status: 'SUCCESS',
          receivedAt: action.meta.receivedAt
        }
      };
    case ADD_SOURCE_FAILED:
    case REFRESH_SOURCE_FAILED:
      return {
        ...state,
        [action.meta.id]: {
          ...state[action.meta.id],
          status: 'ERROR'
        }
      };
    case SOURCE_DELETED:
      return {
        ...state,
        [action.meta.id]: {
          ...state[action.meta.id],
          deleted: true
        }
      };
    case SOURCE_DELETED_UNDONE:
      return {
        ...state,
        [action.meta.id]: {
          ...state[action.meta.id], // or status: DELETED?
          deleted: false
        }
      };
    default:
      return state;
  }
};

export default meta;
