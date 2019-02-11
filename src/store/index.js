import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import history from '~/routes/history';

import sagas from './sagas';
import createRootReducer from './ducks';

const middlewares = [];

const persistedReducer = createRootReducer(history);

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);
middlewares.push(routerMiddleware(history));

const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

const store = createAppropriateStore(persistedReducer, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);

export { store };
