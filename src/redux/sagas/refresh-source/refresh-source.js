import { take, call, put, fork, cancel } from 'redux-saga/effects';
import fetchSource from '../../../api/fetch-source/fetch-source';
import {
  REFRESH_SOURCE_REQUESTED,
  refreshSourceSucceeded,
  refreshSourceFailed
} from '../../actions/refresh-source/refresh-source';

function* refreshSource(action) {
  const source = action.payload;
  let response;
  try {
    response = yield call(fetchSource, source);
  } catch (ex) {
    yield put(refreshSourceFailed(source));
    return;
  }
  yield put(refreshSourceSucceeded(source, response, Date.now()));
}

// This custom implementation of `takeLatest` ensures multiple sources
// can be refreshed in parallel.
function* watchRefreshSource() {
  const tasks = new Map();
  while (true) {
    const action = yield take(REFRESH_SOURCE_REQUESTED);
    if (tasks.get(action.meta.id)) {
      yield cancel(tasks.get(action.meta.id));
    }
    const task = yield fork(function*(action) {
      yield refreshSource(action);
      tasks.delete(action.meta.id);
    }, action);
    tasks.set(action.meta.id, task);
  }
}

export default watchRefreshSource;
