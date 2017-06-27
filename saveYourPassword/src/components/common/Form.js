import React from 'react';
import {View} from 'react-native';
import {FormLabel, FormInput,Button,FormValidationMessage} from 'react-native-elements';

const Form = ({label,placeholder,onChangeText,onBlur,fieldName,secureTextEntry}) => {

    return (
            <View>
                <FormLabel>{label}</FormLabel>
                <FormInput
                    secureTextEntry={secureTextEntry}
                    onBlur={() => onBlur(fieldName)}
                    placeholder={placeholder}
                    onChangeText={onChangeText}/>
            </View>
    )
};

export {Form}