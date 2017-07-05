import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';
class PasswordList extends Component {
    constructor(props) {
        super(props);
        console.log(0) ;
    }

    componentWillMount(){
        const {currentUser} = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/password`)
            .on('value',snapshot => {
                //dispatch({type: EMPLOYEES_FETCH_SUCCESS , payload:snapshot.val()})
                console.log(snapshot.val());
            });
    }
    render() {
        return (
            <View>
                <Text>koko</Text>
            </View>
        )
    }
}
export default PasswordList ;