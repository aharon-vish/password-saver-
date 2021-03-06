import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Form, ValidateInput} from './common';
import {Button} from 'react-native-elements';
import{registrationUser} from '../actions';
import validate from 'validate.js';
import {validationAuthRules} from '../formRules';
class RegistrationForm extends Component {
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
            this.props.registrationUser(this.state.email, this.state.password);
        } else {
            return false;
        }
    }

    render() {
        return (
            <View>
                {this.renderLoginForm()}
                <Button
                    onPress={this.submit}
                    title={`Sing In`}
                    buttonStyle={{width: '100%', height: 60}}
                    fontSize={20}
                    fontWeight={`200`}
                    backgroundColor={`#a301bc`}/>
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
export default connect(mapStateToProps, {registrationUser})(RegistrationForm);