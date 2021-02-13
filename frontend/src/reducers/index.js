import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../shared/history';
import { sample } from './sample';

export default combineReducers({
    sample: sample,
    router: connectRouter(history)
});
