import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity}  from 'react-native';
import {Form} from './common';

class NewPasswordForm extends Component {
    constructor(props) {
        super(props);
        this.renderPasswordForm = this.renderPasswordForm.bind(this);
    }

    renderPasswordForm() {
        return formFields.map((field)=> {
            return <Form label={field.label} key={field.key} secureTextEntry = {field.input.secureTextEntry}/>
        })
    }

    render() {
        return (
            <View>
                {this.renderPasswordForm()}
            </View>
        );
    }
}
const formFields = [{
    key: 'service',
    label: 'service',
    input: {
        placeholder: 'service name',
        inputStyle: {textAlign: 'center'},
        error: 'service'
    }
},
    {
        key: 'user-name-email',
        label: 'user name',
        input: {
            placeholder: 'User Name / Email',
            inputStyle: {textAlign: 'center'},
            error: 'user-name-email'
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
export default NewPasswordForm ;