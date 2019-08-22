import {createStore, applyMiddleware, compose} from 'redux';
import { cityReducer } from '../reducers';
import createSagaMiddleware from 'redux-saga';
import { watchFetchWeather } from '../sagas';
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(cityReducer, storeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watchFetchWeather);