import { SNACKBAR_CLOSED } from '../../../actions/snackbar-closed/snackbar-closed';

const initialState = {};

const snackbar = (state = initialState, action) => {
  if (action && action.meta && action.meta.snackbar) {
    return action.meta.snackbar;
  }
  if (action.type === SNACKBAR_CLOSED) {
    // HACK: Ideally this would just reset the state to the `initialState`
    // however material UI will render a blank message if we blow away
    // the old state... it should really hold onto the old message when
    // transitioning from open === true -> open === false...
    return {
      ...state,
      type: ''
    };
  }
  return state;
};

export default snackbar;
