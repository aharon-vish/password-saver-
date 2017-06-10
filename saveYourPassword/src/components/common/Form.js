import React from 'react';
import {View} from 'react-native';
import {FormLabel, FormInput,Button,FormValidationMessage} from 'react-native-elements';
const Form = ({form}) => {
    let errorMsg = 'lolo';
    const {fieldInputChange} = form;
    const{formFields,formStyle} = form.form;
    const onSubmit = (key,koko) =>{
        this.errorMsg='pop';
    };
    return (
        <View style={formStyle}>
            {formFields.map(field => (
                <View style={formStyle} key={field.key}>
                    <FormLabel>{field.labael}</FormLabel>
                    <FormInput placeholder={field.input.placeholder}
                               secureTextEntry={field.input.secureTextEntry}
                               inputStyle={field.input.inputStyle}
                               onChangeText={fieldInputChange.bind(this,field.key)}
                               key={field.key}/>
                </View>
            ))}
            <FormValidationMessage>{errorMsg}</FormValidationMessage>
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