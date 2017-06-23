import React from 'react';
import {View} from 'react-native';
import validate from 'validate.js';
import validationRules from '../../formRules';
import {FormValidationMessage} from 'react-native-elements';

const ValidateInput = ({errorMsg}) => {
    return (<FormValidationMessage labelStyle={{marginBottom:30}}>{errorMsg}</FormValidationMessage>)
};
export {ValidateInput}
