import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import NewPasswordReducer from './NewPasswordReducer';

export default combineReducers ({
    auth:AuthReducer,
    newPassword:NewPasswordReducer
});