import React from 'react';
import {View} from 'react-native';
import validate from 'validate.js';
import validationRules from '../../formRules';
import {FormValidationMessage} from 'react-native-elements';

const ValidateInput = ({errorMsg}) => {
    return (<FormValidationMessage>{errorMsg}</FormValidationMessage>)
};
export {ValidateInput}
