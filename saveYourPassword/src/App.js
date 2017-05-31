import React, {Component} from 'react';
import {View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text}  from 'react-native';
import { Button,FormLabel,FormInput,FormValidationMessage } from 'react-native-elements';

class App extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {userName: '', password: ''};
    }

    componentWillMount() {

    }

    onSubmit(e) {
        console.log(this.state.userName, this.state.password);
    }

    render() {
        return (
            <View style={styles.entryStyle}>
                <FormLabel>User Name</FormLabel>
                <FormInput
                    inputStyle={{textAlign:'center'}}
                    placeholder={`your@mail.com`}
                    onChangeText={value => this.setState({userName:value})}
                />
                <FormValidationMessage>{}</FormValidationMessage>
                <FormLabel>Password</FormLabel>
                <FormInput
                    placeholder={`password`}
                    inputStyle={{textAlign:'center'}}
                    secureTextEntry
                    onChangeText={value => this.setState({password:value})}
                />
                <FormValidationMessage>{}</FormValidationMessage>
                <Button
                    title={`registration`}
                    buttonStyle={{width:'100%',marginTop:60}}
                    fontSize={20}
                    fontWeight={`200`}
                    backgroundColor={`#a301bc`}
                    onPress={this.onSubmit}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    entryStyle: {
        display: 'flex',
        flex: 1,
        marginTop: 60,
        width: '100%',
        height: '20%',
        flexDirection: 'column',
        alignItems: 'center'
    }
});
export default App;