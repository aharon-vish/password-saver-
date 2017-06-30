import {ADD_NEW_PASSWORD} from '../types';

const INITIAL_STATE = {service:'', userName:'', password:''};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_NEW_PASSWORD:
            return {...state};
        default:
            return state;
    }
};