import {LOGIN_USER,LOGIN_USER_FAIL} from '../types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const loginUser = ({email, password})=> {
    debugger;
    return (dispatch)=> {
        dispatch({type: LOGIN_USER});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user=>console.log(user))
            .catch(()=>loginUserFail(dispatch));
    };
};
const loginUserFail = (dispatch)=> {
    dispatch({
        type: LOGIN_USER_FAIL
    });
};