import {ADD_NEW_PASSWORD} from '../types';
import firebase from 'firebase';
import {View, Text, TextInput, Alert}  from 'react-native';
import {Actions} from 'react-native-router-flux';

export const addNewPassword = ({service,userName,password})=> {
     const {currentUser} = firebase.auth();
  /*  return (dispatch)=> {
        firebase.database().ref(`/users/${currentUser.uid}/password`)
            .push({service,userName,password})
            .then((user) => {
                Alert.alert(
                    'The record saved successfully',
                    user.message,
                    [
                        {text: 'Ok', style: 'Ok'}
                    ],
                    {cancelable: false}
                );
                Actions.home();
                dispatch({type: ADD_NEW_PASSWORD});
            }).catch((user)=>
            Alert.alert(
                'Record Not Saved',
                user.message,
                [
                    {text: 'Ok', style: 'Ok'}
                ],
                {cancelable: false}
            ));
    };*/
    const request =
        firebase.database().ref(`/users/${currentUser.uid}/password`)
            .push({service,userName,password});
    return {
        type: ADD_NEW_PASSWORD,
        payload: request
    };
};