import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  WEATHER_REQUEST,
  WEATHER_ERROR,
  GET_WEATHER,
  LOADING_WEATHER,
} from '../reducers/cityReducer';



export function* watchFetchWeather() {
  return yield takeEvery('FETCHED_WEATHER', fetchWeatherAsync);
}


const myKey = '8e9d55d0a1260f2a1d8ee7e6dc439796';


function* fetchWeatherAsync({payload:{city}}) {
  try {
    yield put(LOADING_WEATHER(true));
    const data = yield call(() => {
      return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}`, {
        params: {
          appid: myKey,
          units: 'metric'
        }}).then(res => res.data);
    });
    yield put(GET_WEATHER(data));
    yield put(WEATHER_REQUEST(true));
  } catch (error) {
    yield put(WEATHER_ERROR());
  }
}
