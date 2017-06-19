import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions';
import {Form,ValidateInput} from './common';
import {View,Text}  from 'react-native';
import {Button} from 'react-native-elements';
import validate from 'validate.js';
import validationRules from '../formRules';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: '', emailError: ''};
    }

    test(fieldName){
        let errorMsg = validate({[fieldName]:this.state[fieldName]},validationRules);
        if(errorMsg[fieldName] && errorMsg[fieldName][0]){
            this.setState({
                [`${fieldName}Error`]:errorMsg[fieldName][0]
            });
        }else {
            this.setState({
                [`${fieldName}Error`]:''
            });
        }
    }
    renderLoginForm() {
        return formFields.map((field)=> {
                return (
                    <View key={field.key} style={{display: 'flex',textAlign :'center',justifyContent:'center',backgroundColor: 'yellow',borderStyle: 'dotted'}}>
                        <Form
                            label={field.label}
                            placeholder={field.input.placeholder}
                            onBlur={fieldName => this.test(fieldName)}
                            fieldName={field.key}
                            onChangeText={value => (this.setState({[field.key]:value.trim()}))}
                            input={field.input}/>
                        <ValidateInput errorMsg={this.state[field.input.error]}/>
                    </View>
                )
            }
        )
    }

    render() {
        return (
            <View>
                {this.renderLoginForm()}
                <Button
                    title={`Log In`}
                    buttonStyle={{width: '100%', marginTop: 60}}
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

export default connect(mapStateToProps, {loginUser})(LoginForm);