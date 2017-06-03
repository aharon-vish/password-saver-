import {LOGIN_USER,LOGIN_USER_FAIL} from '../types';

const INITIAL_STATE = {email: '', password: '', user: null, error: '',loading:false};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loading:true, error:''};
        case LOGIN_USER_FAIL:
            return {...state, error: 'Authentication Failed',loading:false,password:''};
        default:
            return state;
    }
};