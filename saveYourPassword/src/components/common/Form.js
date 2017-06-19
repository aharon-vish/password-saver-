import React from 'react';
import {View} from 'react-native';
import {FormLabel, FormInput,Button,FormValidationMessage} from 'react-native-elements';

const Form = ({label,placeholder,onChangeText,onBlur,fieldName,input}) => {

    return (
            <View style={{display: 'flex',textAlign :'center',justifyContent:'center',backgroundColor: 'yellow',borderStyle: 'dotted'}}>
                <FormLabel>{label}</FormLabel>
                <FormInput
                    onBlur={() => onBlur(fieldName)}
                    placeholder={placeholder}
                    onChangeText={onChangeText}/>
            </View>
    )
};

export {Form}