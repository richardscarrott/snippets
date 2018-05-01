import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import { chromeLocalStorage } from './storage';
import { migrations } from './migrations';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const persistedRootReducer = persistReducer(
  {
    key: 'root',
    version: 11,
    storage: chromeLocalStorage,
    migrate: createMigrate(migrations, { debug: false })
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
