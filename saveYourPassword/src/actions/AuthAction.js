import {LOGIN_USER, LOGIN_USER_FAIL, REGISTRATION_USER} from '../types';
import firebase from 'firebase';
import {View, Text, TextInput, Alert}  from 'react-native';
import {Actions} from 'react-native-router-flux';

export const loginUser = (email, password)=> {
    return (dispatch)=> {
        dispatch({type: LOGIN_USER});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(Actions.home)
            .catch((user)=> {
                Alert.alert(
                    'Login Failed',
                    user.message,
                    [
                        {text: 'Cancel', style: 'cancel'},
                    ],
                    {cancelable: false}
                )
            });
    };
};
export const registrationUser = (email, password)=> {
    return (dispatch)=> {
        dispatch({type: REGISTRATION_USER});
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(Actions.home)
            .catch((user)=>
                Alert.alert(
                    'Login Failed',
                    user.message,
                    [
                        {text: 'Cancel', style: 'cancel'},
                    ],
                    {cancelable: false}
                ));
    }
};
const loginUserFail = (dispatch)=> {
    dispatch({
        type: LOGIN_USER_FAIL
    });
};