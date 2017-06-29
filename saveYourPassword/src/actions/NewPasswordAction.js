import {ADD_NEW_PASSWORD} from '../types';
import firebase from 'firebase';
import {View, Text, TextInput, Alert}  from 'react-native';
import {Actions} from 'react-native-router-flux';

export const addNewPassword = (service,userName,password)=> {
    return (dispatch)=> {
        dispatch({type: ADD_NEW_PASSWORD});
    }
};