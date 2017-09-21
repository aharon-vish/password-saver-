import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity}  from 'react-native';
import {Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';
import PasswordList from './PasswordList';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordList: null
        };
        this.newPasswordForm = this.newPasswordForm.bind(this);
    }

    componentWillMount() {
        const {currentUser} = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/password`)
            .on('value', snapshot => {
                //dispatch({type: EMPLOYEES_FETCH_SUCCESS , payload:snapshot.val()})
                console.log(snapshot.val());
                this.setState({
                    passwordList: snapshot.val()
                })
            });
    }

    newPasswordForm() {
        Actions.newPasswordForm();
    }

    render() {
        console.log(this.state);
        return (
            <View style={{}}>
                <PasswordList passwordList={this.state.passwordList}/>
                <Icon
                    iconStyle={{}}
                    raised
                    name='plus'
                    type='font-awesome'
                    color='#fff'
                    containerStyle={{backgroundColor: `#a301bc`, position: 'absolute', bottom: 15, right: 15}}
                    onPress={this.newPasswordForm}/>
            </View>
        );
    }
}
export default Home ;