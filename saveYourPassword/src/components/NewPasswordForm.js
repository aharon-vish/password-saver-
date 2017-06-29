import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity}  from 'react-native';
import {Form, ValidateInput} from './common';
import {Button} from 'react-native-elements';
import validate from 'validate.js';
import {validationNewPasswordhRules} from '../formRules';

class NewPasswordForm extends Component {
    constructor(props) {
        super(props);
        this.renderPasswordForm = this.renderPasswordForm.bind(this);
        this.addNewPassword = this.addNewPassword.bind(this);
        this.state = {service: '', userName: '', password: '',userNameError:'',errors:{}};
    }

    renderPasswordForm() {
        return formFields.map((field)=> {
            return (
                <View key={field.key}>
                    <Form label={field.label}
                          key={field.key}
                          onBlur={()=> console.log()}
                          secureTextEntry={field.input.secureTextEntry }
                          onChangeText={value => (this.setState({[field.key]: value.trim()}))}/>
                    <ValidateInput errorMsg={this.state[field.input.error]}/>
                </View>
            )
        })
    }

    addNewPassword() {
        this.state.errors = validate(this.state, validationNewPasswordhRules);
        let hasErrors = false;
        this.state.errors && Object.keys(this.state.errors).map(function(key){
            hasErrors = true ;
            var temp = `${key}Error`;
            return this.setState({[temp]:this.state.errors[key]});
        }.bind(this));

        if(!hasErrors){
            console.log('now errros');
        }else {
            return this;
        }
    }

    render() {
        return (
            <View>
                {this.renderPasswordForm()}
                <Button
                    onPress={this.addNewPassword}
                    title={`Add New Password`}
                    buttonStyle={{width: '100%', height: 60, marginTop:15}}
                    fontSize={20}
                    fontWeight={`200`}
                    backgroundColor={`#a301bc`}/>
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
        error: 'serviceError'
    }
},
    {
        key: 'userName',
        label: 'user name',
        input: {
            placeholder: 'User Name / Email',
            inputStyle: {textAlign: 'center'},
            error: 'userNameError'
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