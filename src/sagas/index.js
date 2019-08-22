import {call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { weatherRequest, loadingWeather, getWeather, weatherError, fetchWeather } from '../actions'
import { key } from '../constants';

export function* watchFetchWeather(){
  return yield takeEvery(fetchWeather, fetchWeatherAsync)
}

function* fetchWeatherAsync(city){
  const formattedCity = city.payload.toLowerCase()
  try{
    yield put(weatherRequest(false))
    yield put(loadingWeather(true))
    const weatherData = yield call(()=>{
      return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${formattedCity}`, {
        params: {
          appid: key,
          units: 'metric'
        }}).then(res => res.data);
    }
    )
    console.log(weatherData)
    yield put(getWeather(weatherData))
    yield put(loadingWeather(false))
    yield put(weatherRequest(true))
  } catch (error) {
    yield put(weatherError())
  }
}