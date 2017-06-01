import {LOGIN_USER} from '../types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const loginUser = ({email, password})=> {

    return (dispatch)=> {
        dispatch({type:LOGIN_USER});
        firebase.auth().signInWithEmailAndPassword(email, password)
    };
};

const loginUserSuccess = (dispatch, user)=> {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.main();
};