import { combineReducers } from 'redux';
import { SIGN_IN } from '../constants/action-types';
import auth from './auth.js';
import itinerary from './itinerary.js';

const initialState = {
    credentials: 'NOT_LOGGED_IN'
};

const rootReducer = combineReducers({
    auth,
    itinerary
});

export default rootReducer;



