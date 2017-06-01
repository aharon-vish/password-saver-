import {LOGIN_USER} from '../types';

const INITIAL_STATE = {email: '', password: '', user: null, error: '',loading:false};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loading:true, error:''};
        default:
            return state;
    }
};