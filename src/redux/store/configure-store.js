import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import { chromeLocalStorage } from './storage';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const migrations = {
    // TODO: Not enough users to be too concerned but perhaps should alert explaining why their data
    // will be removed?
    1: (state) => ({})
}

const persistedRootReducer = persistReducer({
        key: 'root',
        version: 1,
        storage: chromeLocalStorage,
        migrate: createMigrate(migrations, { debug: true }),
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