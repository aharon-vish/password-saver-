import {LOGIN_USER,LOGIN_USER_FAIL,REGISTRATION_USER} from '../types';
import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyAb39uFUMSxiGI5SfaGCsFcIGPgaKDAfho",
    authDomain: "password-saver-4c3c7.firebaseapp.com",
    databaseURL: "https://password-saver-4c3c7.firebaseio.com",
    projectId: "password-saver-4c3c7",
    storageBucket: "password-saver-4c3c7.appspot.com",
    messagingSenderId: "462004033964"
};
firebase.initializeApp(config);

const INITIAL_STATE = {email: '', password: '', user: null, error: '',loading:false};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, user: action.payload};
        case LOGIN_USER_FAIL:
            return {...state,user:{},error: 'Authentication Failed',loading:false};
        case REGISTRATION_USER:
            return {...state,INITIAL_STATE,user: action.payload};
        default:
            return state;
    }
};