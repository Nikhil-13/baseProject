import {combineReducers} from 'redux';
import AuthReducer from './slices/auth.slice';

export default combineReducers({auth: AuthReducer});
