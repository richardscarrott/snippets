import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import { chromeLocalStorage } from './storage';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const persistedRootReducer = persistReducer(
  {
    key: 'root',
    storage: chromeLocalStorage
  },
  rootReducer
);

const configureStore = initialState => {
  const store = createStore(
    persistedRootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return [store, persistor];
};

export default configureStore;
