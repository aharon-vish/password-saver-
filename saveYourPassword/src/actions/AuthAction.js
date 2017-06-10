import {LOGIN_USER,LOGIN_USER_FAIL,REGISTRATION_USER} from '../types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const loginUser = ({email, password})=> {
    return (dispatch)=> {
        dispatch({type: LOGIN_USER});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user=>console.log(user))
            .catch((user)=>console.log(user));
    };
};
export const registrationUser = ({email, password})=>{
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user=>console.log(user))
        .catch((user)=>console.log(user));
};
const loginUserFail = (dispatch)=> {
    dispatch({
        type: LOGIN_USER_FAIL
    });
};