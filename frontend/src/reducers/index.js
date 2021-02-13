import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { sample } from './sample';

export default combineReducers({
    sample: sample,
});
