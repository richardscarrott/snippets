export const REFRESH_SOURCE_REQUESTED = 'REFRESH_SOURCE_REQUESTED';
export const REFRESH_SOURCE_SUCCEEDED = 'REFRESH_SOURCE_SUCCEEDED';
export const REFRESH_SOURCE_FAILED = 'REFRESH_SOURCE_FAILED';
export const REFRESH_SOURCE_CANCELLED = 'REFRESH_SOURCE_CANCELLED';

export const refreshSourceRequested = source => ({
  type: REFRESH_SOURCE_REQUESTED,
  meta: {
    id: source.id
  },
  payload: source
});

export const refreshSourceSucceeded = (source, response, receivedAt) => {
  return {
    type: REFRESH_SOURCE_SUCCEEDED,
    meta: {
      id: source.id,
      receivedAt,
      snackbar: {
        type: REFRESH_SOURCE_SUCCEEDED,
        payload: source
      }
    },
    payload: response
  };
};

export const refreshSourceFailed = source => ({
  type: REFRESH_SOURCE_FAILED,
  meta: {
    id: source.id,
    snackbar: {
      type: REFRESH_SOURCE_FAILED,
      payload: source
    }
  }
});
