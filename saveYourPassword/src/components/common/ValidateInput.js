import React from 'react';
import {View} from 'react-native';
import {FormLabel, FormInput,Button,FormValidationMessage} from 'react-native-elements';

const ValidateInput = ({errorMsg}) => {
    return (<FormValidationMessage>{errorMsg}</FormValidationMessage>)
};
export {ValidateInput}
