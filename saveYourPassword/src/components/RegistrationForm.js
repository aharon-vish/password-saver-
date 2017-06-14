//import React, {Component} from 'react';
//import {Text,View,StyleSheet} from 'react-native';
//import {connect} from 'react-redux';
//import {Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
//import{registrationUser} from '../actions';
//class RegistrationForm extends Component {
//    constructor(props) {
//        super(props);
//        this.state = {email: '', password: '', errorEmail: '', errorPassword: ''};
//    }
//    render() {
//        return (
//            <View style={styles.entryStyle}>
//            <FormLabel>User Name</FormLabel>
//            <FormInput
//                inputStyle={{textAlign: 'center'}}
//                placeholder={`your@mail.com`}
//            />
//            <FormValidationMessage>{this.state.errorEmail}</FormValidationMessage>
//            <FormLabel>Password</FormLabel>
//            <FormInput
//                placeholder={`password`}
//                inputStyle={{textAlign: 'center'}}
//                secureTextEntry
//            />
//            <FormValidationMessage>{this.state.errorPassword}</FormValidationMessage>
//            <FormValidationMessage>{this.props.error}</FormValidationMessage>
//            <Button
//                title={`Sing Up`}
//                buttonStyle={{width: '100%', marginTop: 60}}
//                fontSize={20}
//                fontWeight={`200`}
//                backgroundColor={`#a301bc`}
//                onPress={this.props.registrationUser({email:'s@koko.com',password:'123456'})}
//            />
//        </View>);
//    }
//}
//const styles = StyleSheet.create({
//    entryStyle: {
//        alignItems: 'center'
//    }
//});
//const mapStateToProps = ({auth}) => {
//    const {email, password, error, loading} = auth;
//    return {email, password, error, loading};
//};
//export default connect(mapStateToProps, {registrationUser})(RegistrationForm);