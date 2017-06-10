import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {loginUser} from '../actions';
import {Form} from './common';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
}  from 'react-native';
import {Button} from 'react-native-elements';
import validator from 'validator';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.changeToRegistrationForm = this.changeToRegistrationForm.bind(this);
        this.fieldInputChange = this.fieldInputChange.bind(this);
        this.state = {key: '', email: 'lolo', password: '', errorEmail: '', errorPassword: ''};
    }

    onSubmit() {
        let {email, password} = this.state;
        email = validator.trim(email);
        password = validator.trim(password);

        let validFormEmail = false;
        let validFormPassword = false;

        if (validator.isEmpty(email)) {
            this.setState({errorEmail: 'Email is required.'});
            validFormEmail = false;
        } else {
            this.setState({errorEmail: ''});
            validFormEmail = true;
        }
        if (!validator.isEmail(email)) {
            this.setState({errorEmail: 'Email is required.'});
            validFormEmail = false;
        } else {
            this.setState({errorEmail: ''});
            validFormEmail = true;
        }
        if (validator.isEmpty(password)) {
            this.setState({errorPassword: 'Password is required.'});
            validFormPassword = false;
        } else {
            this.setState({errorPassword: ''});
            validFormPassword = true;
        }
        validFormPassword && validFormEmail && this.props.loginUser({email, password});
    }

    changeToRegistrationForm() {
        return (
            <View>
                <Button
                    title={`Log In`}
                    buttonStyle={{width: '100%', marginTop: 60}}
                    fontSize={20}
                    fontWeight={`200`}
                    backgroundColor={`#a301bc`}
                    onPress={this.onSubmit}/>
                <TouchableOpacity>
                    <Text
                        style={styles.singUpBtnStyle}
                        /*onPress={()=>{Actions.registration()}}*/
                        onPress={this.changeToRegistrationForm}
                    >Sing Up</Text>
                </TouchableOpacity>
            </View>);
    }

    fieldInputChange(key, value) {
        console.log(typeof key, value);
        switch (key) {
            case 'email':
                this.setState({email: value});
                return;
            case 'password':
                this.setState({password: value});
                return;
            default:
                return console.log('no type');
        }
    }
    render() {
        return (
            <View style={styles.entryStyle}>
                <Form form={{
                    form,
                    fieldInputChange: this.fieldInputChange,
                    errorMsg:this.state.error}}/>
                <Text>email:{this.state.email}</Text>
                <Text>password:{this.state.password}</Text>
            </View>
        );
    }
}
const formFields = [{
    key: 'email',
    labael: 'User Name',
    input: {
        placeholder: 'your@mail.com',
        inputStyle: {textAlign: 'center'}
    }
},
    {
        key: 'password',
        labael: 'Password',
        input: {
            placeholder: 'Password',
            secureTextEntry: true,
            inputStyle: {textAlign: 'center'}
        }
    }];
const formStyle = {alignItems: 'center'};
const form = {
    formFields: formFields,
    formStyle: formStyle
};
const styles = StyleSheet.create({
    singUpBtnStyle: {
        marginTop: 40,
        textDecorationLine: 'underline',
        textAlign: 'center'
    }
});

const mapStateToProps = ({auth}) => {
    const {email, password, error, loading} = auth;
    return {email, password, error, loading};
};

export default connect(mapStateToProps, {loginUser})(LoginForm);