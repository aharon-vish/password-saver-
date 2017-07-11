import {ADD_NEW_PASSWORD} from '../types';
import firebase from 'firebase';
import {View, Text, TextInput, Alert}  from 'react-native';
import {Actions} from 'react-native-router-flux';

export const addNewPassword = ({service,userName,password})=> {
     const {currentUser} = firebase.auth();
    const request =
        firebase.database().ref(`/users/${currentUser.uid}/password`)
            .push({service,userName,password});
    return {
        type: ADD_NEW_PASSWORD,
        payload: request
    };
};