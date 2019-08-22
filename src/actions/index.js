import { createAction } from 'redux-act'
import {
  GET_CITY,
  WEATHER_REQUEST,
  LOADING_WEATHER,
  GET_WEATHER,
  WEATHER_ERROR,
  FETCH_WEATHER
} from '../constants'

export const getCity = createAction(GET_CITY, data => data)
export const weatherRequest = createAction(WEATHER_REQUEST, data => data)
export const loadingWeather = createAction(LOADING_WEATHER, data => data)
export const getWeather = createAction(GET_WEATHER, data => data)
export const weatherError = createAction(WEATHER_ERROR, data => data)
export const fetchWeather = createAction(FETCH_WEATHER)
