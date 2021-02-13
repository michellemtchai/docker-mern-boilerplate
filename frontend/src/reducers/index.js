import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../shared/history';
import { app } from './app';

export default combineReducers({
    app: app,
    router: connectRouter(history)
});
