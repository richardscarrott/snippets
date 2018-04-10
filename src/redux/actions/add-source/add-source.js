export const ADD_SOURCE_REQUESTED = 'ADD_SOURCE_REQUESTED';
export const ADD_SOURCE_SUCCEEDED = 'ADD_SOURCE_SUCCEEDED';
export const ADD_SOURCE_FAILED = 'ADD_SOURCE_FAILED';
export const ADD_SOURCE_CANCELLED = 'ADD_SOURCE_CANCELLED';

export const addSourceRequested = source => ({
  type: ADD_SOURCE_REQUESTED,
  meta: {
    id: source.id
  },
  payload: source
});

export const addSourceSucceeded = (source, response, receivedAt) => {
  return {
    type: ADD_SOURCE_SUCCEEDED,
    meta: {
      id: source.id,
      receivedAt,
      snackbar: {
        type: ADD_SOURCE_SUCCEEDED,
        payload: source
      }
    },
    payload: response
  };
};

export const addSourceFailed = source => ({
  type: ADD_SOURCE_FAILED,
  meta: {
    id: source.id
  }
});

export const addSourceCancelled = id => ({
  type: ADD_SOURCE_CANCELLED,
  meta: {
    id
  }
});
