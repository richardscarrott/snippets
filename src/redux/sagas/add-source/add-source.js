import { fork, take, call, put, race } from 'redux-saga/effects';
import { parseGitHubUrl } from '../../../utils/parse-github-url/parse-github-url';
import fetchSource from '../../../api/fetch-source/fetch-source';
import {
  ADD_SOURCE_REQUESTED,
  ADD_SOURCE_CANCELLED,
  addSourceSucceeded,
  addSourceFailed
} from '../../actions/add-source/add-source';

function* addSource(source) {
  let response;
  try {
    response = yield call(fetchSource, source);
  } catch (ex) {
    console.error(ex);
    yield put(addSourceFailed(source));
    return;
  }
  yield put(addSourceSucceeded(source, response, Date.now()));
}

function* addSourceWithCancel(source) {
  yield race([
    call(addSource, source),
    take(
      action =>
        action.type === ADD_SOURCE_CANCELLED && source.id === action.meta.id
    )
  ]);
}

const getSource = ({ id, name, url, accessToken }) => {
  return {
    id,
    name,
    url,
    accessToken
  };
};

function* watchAddSource() {
  while (true) {
    const action = yield take(ADD_SOURCE_REQUESTED);
    const source = getSource(action.payload);
    yield fork(addSourceWithCancel, source);
  }
}

export default watchAddSource;
