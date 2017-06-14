import React from 'react';
import {View} from 'react-native';
import {ValidateInput} from './';
import {FormLabel, FormInput,Button,FormValidationMessage} from 'react-native-elements';

const Form = ({label,placeholder,onChangeText,errorMsg}) => {
    return (
        <View>
            <View>
                <FormLabel>{label}</FormLabel>
                <ValidateInput errorMsg={errorMsg}/>
                <FormInput
                    placeholder={placeholder}
                    onChangeText={onChangeText}/>
            </View>
        </View>
    )
};

export {Form}