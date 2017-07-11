import React,{Component}from 'react';
import {View,Text,Animated,Easing} from 'react-native';
import {FormLabel, FormInput,Button,FormValidationMessage} from 'react-native-elements';

class Form extends Component {
    constructor(props) {
        super(props);
        const {label,placeholder,onChangeText,onBlur,fieldName,secureTextEntry} = this.props;
        this.state={label,placeholder,onChangeText,onBlur,fieldName,secureTextEntry,
                     fadeAnim: new Animated.Value(0.5),
                     topAnim:new Animated.Value(30)};
        this.startAnimated = this.startAnimated.bind(this);
    }
    componentDidMount() {
    }

    startAnimated(){
        Animated.parallel([
            Animated.timing(
                this.state.topAnim,{
                    toValue: 0,
                    duration: 200
                }),
            Animated.timing(
                this.state.fadeAnim,{
                    toValue: 1,
                    duration: 200
                })
        ]).start();
    }
    onFocus() {
        this.startAnimated();
    }

    render() {
        let { fadeAnim,topAnim} = this.state;
        return (
            <View>
                <Animated.Text style={{left:10, top: topAnim,opacity: fadeAnim}}>{this.state.label}
                </Animated.Text>

                <FormInput
                    onFocus={this.startAnimated}
                    secureTextEntry={this.state.secureTextEntry}
                    onBlur={() => onBlur(this.state.fieldName)}
                    onChangeText={this.state.onChangeText}/>
            </View>
        )
    }
}

export {Form}