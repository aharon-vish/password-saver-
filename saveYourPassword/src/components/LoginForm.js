import React, {Component} from 'react';
import {connect} from 'react-redux';
import firebase from 'firebase';
import {loginUser} from '../actions';
import {View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text}  from 'react-native';
import { Button,FormLabel,FormInput,FormValidationMessage } from 'react-native-elements';
import validator from 'validator';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {email: '', password: '', errorEmail: '', errorPassword: ''};
    }

    componentWillMount() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyAb39uFUMSxiGI5SfaGCsFcIGPgaKDAfho",
            authDomain: "password-saver-4c3c7.firebaseapp.com",
            databaseURL: "https://password-saver-4c3c7.firebaseio.com",
            projectId: "password-saver-4c3c7",
            storageBucket: "password-saver-4c3c7.appspot.com",
            messagingSenderId: "462004033964"
        };
        firebase.initializeApp(config);
    }

    onSubmit(e) {
        let {email,password} = this.state;
        email = validator.trim(email);
        password = validator.trim(password);

        if (validator.isEmpty(email) || !validator.isEmail(email)){
            this.setState({errorEmail: 'Email is required.'});
        }
        //validator.isEmpty(email) ? this.setState({errorEmail: 'Email is required.'}) :
        //    this.setState({errorEmail: ''});
        //
        //validator.isEmpty(password) ? this.setState({errorPassword: 'Password is required.'}) :
        //    this.setState({errorPassword: ''});
        //
        //if ((this.state.errorEmail !== '') || (this.state.errorPassword !== '')) {
        //    return;
        //}else {
        //    this.props.loginUser({email, password});
        //}
        this.props.loginUser({email, password});
    }

    render() {

        return (
            <View style={styles.entryStyle}>
                <FormLabel>User Name</FormLabel>
                <FormInput
                    inputStyle={{textAlign:'center'}}
                    placeholder={`your@mail.com`}
                    onChangeText={value => this.setState({email:value})}
                />
                <FormValidationMessage>{this.props.error}</FormValidationMessage>
                <FormValidationMessage>{this.state.errorEmail}</FormValidationMessage>
                <FormLabel>Password</FormLabel>
                <FormInput
                    placeholder={`password`}
                    inputStyle={{textAlign:'center'}}
                    secureTextEntry
                    onChangeText={value => this.setState({password:value})}
                />
                <FormValidationMessage>{this.state.errorPassword}</FormValidationMessage>
                <Button
                    title={`Log In`}
                    buttonStyle={{width:'100%',marginTop:60}}
                    fontSize={20}
                    fontWeight={`200`}
                    backgroundColor={`#a301bc`}
                    onPress={this.onSubmit}/>
                <TouchableOpacity>
                    <Text style={{marginTop:40, textDecorationLine:'underline'}}>Sing Up</Text>
                </TouchableOpacity>
            </View>
        )
            ;
    }
}

const styles = StyleSheet.create({
    entryStyle: {
        display: 'flex',
        flex: 1,
        marginTop: 60,
        width: '100%',
        height: '20%',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

const mapStateToProps = ({auth}) => {
    const {email,password,error,loading} = auth;
    return {email, password, error, loading};
};

export default connect(mapStateToProps, {loginUser})(LoginForm);