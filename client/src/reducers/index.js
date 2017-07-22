import { combineReducers } from 'redux';
import mapTime from './mapTime';
import app from './app';

const reducers = combineReducers({
    mapTime,
    app
});

export default reducers;