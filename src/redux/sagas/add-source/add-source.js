import { fork, take, call, put, race } from 'redux-saga/effects';
import parseGithubUrl from 'parse-github-url';
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

const PUBLIC_GITHUB_HOST = 'github.com';

const getApi = (protocol, host) => {
  return host === PUBLIC_GITHUB_HOST
    ? `${protocol}//api.${host}`
    : `${protocol}//${host}/api/v3`;
};

// TODO: Move to util and unit test
const getSource = ({ id, name, url, accessToken }) => {
  const {
    owner,
    name: repo,
    protocol,
    branch,
    pathname,
    host
  } = parseGithubUrl(url);
  const path = pathname.split(branch)[1];
  return {
    id,
    name,
    accessToken,
    url,
    path,
    owner,
    repo,
    api: getApi(protocol, host),
    branch
  };
};

function* watchAddSource() {
  while (true) {
    const action = yield take(ADD_SOURCE_REQUESTED);
    // TODO: Try catch this.
    const source = getSource(action.payload);
    yield fork(addSourceWithCancel, source);
  }
}

export default watchAddSource;
