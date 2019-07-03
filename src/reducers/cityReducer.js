import {createAction, createReducer} from 'redux-act';

export const initialState = {
    city: '',
    weatherData: {},
    loading: false,
    isGetted: false
}

export const WEATHER_REQUEST = createAction('WEATHER_REQUEST', data=>data);
export const WEATHER_ERROR = createAction('WEATHER_SUCCESS');
export const GET_WEATHER = createAction('GET_WEATHER', data=>data);
export const fetchWeather = createAction('FETCHED_WEATHER', city=>({city}));
export const LOADING_WEATHER = createAction('LOADING_WEATHER', data=>data);

export const cityReducer = createReducer({
    [WEATHER_REQUEST]: (state, payload)=> ({...state, isGetted: payload}),
    [WEATHER_ERROR]: state=>state,
    [GET_WEATHER]: (state, payload) => ({...state, weatherData: payload})
}, initialState)