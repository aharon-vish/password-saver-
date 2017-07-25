import {LOGIN_USER, LOGIN_USER_FAIL, REGISTRATION_USER} from '../types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
        loginUserFail();
    }
});

export const loginUser = (email, password)=> {
    const request =
        firebase.auth()
            .signInWithEmailAndPassword(email, password);
    return {
        type: LOGIN_USER,
        payload: request
    };
};
export const registrationUser = (email, password)=> {
    const request =
        firebase.auth()
            .createUserWithEmailAndPassword(email, password);
    return {
        type: REGISTRATION_USER,
        payload: request
    };
};
const loginUserFail = ()=> {
    return (dispatch)=> {
        Actions.auth();
        dispatch({
            type: LOGIN_USER_FAIL
        });
    }
};