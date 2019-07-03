import {createStore, applyMiddleware} from 'redux';
import { cityReducer } from '../reducers/cityReducer';
import createSagaMiddleware from 'redux-saga';
import { watchFetchWeather } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(cityReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchWeather);