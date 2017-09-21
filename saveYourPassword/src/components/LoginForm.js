import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions';
import {Form, ValidateInput} from './common';
import {View, Text, TouchableOpacity,Image,TextInput}  from 'react-native';
import {Button} from 'react-native-elements';
import validate from 'validate.js';
import {Actions} from 'react-native-router-flux';
import {validationAuthRules}from '../formRules';
import ImageView from '../ImageView';
import TextInputi from '../TextInput';
var resolveAssetSource = require('resolveAssetSource');

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
        this.submit = this.submit.bind(this);
    }

    checkValid(fieldName) {
        let errorMsg = validate({[fieldName]: this.state[fieldName]}, validationAuthRules);
        if (errorMsg[fieldName] && errorMsg[fieldName][0]) {
            this.setState({
                [`${fieldName}Error`]: errorMsg[fieldName][0]
            });
            return false;
        } else {
            this.setState({
                [`${fieldName}Error`]: ''
            });
            return true;
        }
    }

    renderLoginForm() {
        return formFields.map((field)=> {
                return (
                    <View key={field.key}>
                        <Form
                            label={field.label}
                            placeholder={field.input.placeholder}
                            onBlur={fieldName => this.checkValid(fieldName)}
                            fieldName={field.key}
                            onChangeText={value => (this.setState({[field.key]: value.trim()}))}
                            styleLabel={{textAlign: 'center'}}
                            styleInput={{textAlign: 'center', width: '100%'}}
                            secureTextEntry = {field.input.secureTextEntry}
                            input={field.input}/>
                        <ValidateInput errorMsg={this.state[field.input.error]}/>
                    </View>
                )
            }
        )
    }

    submit() {
        let isFormValid;
        formFields.map((field) => {
            isFormValid = this.checkValid(field.key);
        });
        if (isFormValid) {
            this.props.loginUser(this.state.email, this.state.password);
        } else {
            return false;
        }
    }

    render() {
        const img = require('../a.jpg');
        const source = resolveAssetSource(img);
        debugger;
        return (
            <View>
                <TextInput style={{height: 40,width: 400, borderColor: 'gray', borderWidth: 1}}/>
                <TextInputi underlineColorAndroid={'blue'} style={{height: 40,width: 400, borderColor: 'gray', borderWidth: 1}}/>
            </View>
        );
    }
}
const formFields = [{
    key: 'email',
    label: 'User Name',
    input: {
        placeholder: 'your@mail.com',
        inputStyle: {textAlign: 'center'},
        error: 'emailError'
    }
},
    {
        key: 'password',
        label: 'Password',
        input: {
            placeholder: 'Password',
            secureTextEntry: true,
            inputStyle: {textAlign: 'center'},
            error: 'passwordError'
        }
    }];

const mapStateToProps = ({auth}) => {
    const {email, password, error, loading} = auth;
    return {email, password, error, loading};
};

export default connect(mapStateToProps, {loginUser})(LoginForm);