import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions';
import {Form} from './common';
import {View,Text}  from 'react-native';
import {Button} from 'react-native-elements';
import validate from 'validate.js';
import validationRules from '../formRules';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
        this.setState({email:'hkfjhfhj'});
    }

    renderLoginForm() {
        return formFields.map((field)=> {
                return ( <Form
                        key={field.key}
                        label={field.label}
                        placeholder={field.input.placeholder}
                        onChangeText={value => (this.setState({[field.key]:value}))}
                        errorMsg={this.state[field.key]}/>
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
        inputStyle: {textAlign: 'center'}
    }
},
    {
        key: 'password',
        label: 'Password',
        input: {
            placeholder: 'Password',
            secureTextEntry: true,
            inputStyle: {textAlign: 'center'}
        }
    }];

const mapStateToProps = ({auth}) => {
    const {email, password, error, loading} = auth;
    return {email, password, error, loading};
};

export default connect(mapStateToProps, {loginUser})(LoginForm);