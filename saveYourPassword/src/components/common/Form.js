import React, {Component}from 'react';
import {View, Text, Animated, Easing} from 'react-native';
import {FormLabel, FormInput, Button, FormValidationMessage} from 'react-native-elements';
import { NativeModules } from 'react-native';
ToastExample = NativeModules.ToastAndroid;

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue:'',
            fadeAnim: new Animated.Value(0.5),
            topAnim: new Animated.Value(30),
            leftAnim: new Animated.Value(20)
        };
        this.startAnimated = this.startAnimated.bind(this);
        this.resetAnimated = this.resetAnimated.bind(this);
    }

    componentDidMount() {
        ToastExample.show('Awesome', 3);
    }

    startAnimated() {
        Animated.parallel([
            Animated.timing(
                this.state.topAnim, {
                    toValue: 0,
                    duration: 200
                }),
            Animated.timing(
                this.state.leftAnim, {
                    toValue: 10,
                    duration: 200
                }),
            Animated.timing(
                this.state.fadeAnim, {
                    toValue: 1,
                    duration: 200
                })
        ]).start();
    }

    resetAnimated() {
        this.state.inputValue === '' &&
        Animated.parallel([
            Animated.timing(
                this.state.topAnim, {
                    toValue: 30,
                    duration: 200
                }),
            Animated.timing(
                this.state.leftAnim, {
                    toValue: 20,
                    duration: 200
                }),
            Animated.timing(
                this.state.fadeAnim, {
                    toValue: 0.5,
                    duration: 200
                })
        ]).start();
    }

    render() {
        const {label, placeholder, onChangeText, onBlur, fieldName, secureTextEntry} = this.props;
        let {fadeAnim, topAnim,leftAnim} = this.state;
        return (
            <View>
                <Animated.Text style={{left: leftAnim, top: topAnim, opacity: fadeAnim}}>
                    {label}
                </Animated.Text>

                <FormInput
                    inputStyle={{width:'auto'}}
                    onFocus={this.startAnimated}
                    secureTextEntry={secureTextEntry}
                    onBlur={() => {
                        onBlur(fieldName);
                        this.resetAnimated();
                    }}
                    onChangeText={(value) => {
                        onChangeText(value);
                        this.setState({inputValue:value})}}/>
            </View>
        )
    }
}

export {Form}