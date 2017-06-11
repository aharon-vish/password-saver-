import React from 'react';
import {View} from 'react-native';
import {FormLabel, FormInput,Button,FormValidationMessage} from 'react-native-elements';
import validate from 'validate.js';
import validationRules from '../../formRules';

const Form = ({form,error,onChangeText,onBlur}) => {
    const {errorMsg} = form;
    const{formFields,formStyle} = form.form;
    const onSubmit = (key,koko) =>{
        this.errorMsg='pop';
    };
    const pop = (_key,_value) =>{
      console.log(_key,_value,'dsd');
    };
    return (
        <View style={formStyle}>
            {formFields.map(field => (
                <View style={formStyle} key={field.key}>
                    <FormLabel>{field.labael}</FormLabel>
                    <FormInput placeholder={field.input.placeholder}
                               secureTextEntry={field.input.secureTextEntry}
                               inputStyle={field.input.inputStyle}
                               onChangeText={onChangeText}
                               key={field.key}
                               onBlur={onBlur}/>
                    <FormValidationMessage>{error}</FormValidationMessage>
                </View>
            ))}
            <Button
                title={`Log In`}
                buttonStyle={{width: '100%', marginTop: 60}}
                fontSize={20}
                fontWeight={`200`}
                backgroundColor={`#a301bc`}
                onPress={onSubmit}/>
        </View>
    )
};

export {Form}