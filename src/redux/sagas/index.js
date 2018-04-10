import { fork } from 'redux-saga/effects';
import watchAddSource from './add-source/add-source';
import watchRefreshSource from './refresh-source/refresh-source';

function* rootSaga() {
  yield fork(watchAddSource);
  yield fork(watchRefreshSource);
}

export default rootSaga;
