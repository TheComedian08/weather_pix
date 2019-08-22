import { createReducer } from 'redux-act'
import {
  weatherRequest,
  weatherError,
  getWeather,
  fetchWeather,
  loadingWeather,
  getCity
} from '../actions'

export const initialState = {
  city: '',
  weatherData: {},
  loading: false,
  isGetted: false
}

export const cityReducer = createReducer(
  {
    [getCity]: (state, payload) => ({...state, city: payload}),
    [fetchWeather]: (state =>state),
    [weatherRequest]: (state, payload) => ({ ...state, isGetted: payload }),
    [loadingWeather]: (state, payload) => ({...state, loading: payload}),
    [getWeather]: (state, payload) => ({ ...state, weatherData: payload }),
    [weatherError]: state => state,
  },
  initialState
)
