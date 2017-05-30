import React, {Component} from 'react';
import {View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text}  from 'react-native';
import { Button,FormLabel,FormInput,FormValidationMessage } from 'react-native-elements';

class App extends Component {
    componentWillMount() {
    }

    render() {
        return (
            <View style={styles.entryStyle}>
                <FormLabel>User Name</FormLabel>
                <FormInput
                    placeholder={`your@mail.com`}
                />
                <FormValidationMessage>{}</FormValidationMessage>
                <FormLabel>Password</FormLabel>
                <FormInput
                    placeholder={`password`}
                    secureTextEntry
                />
                <FormValidationMessage>{}</FormValidationMessage>
                <Button
                    title={`registration`}
                    buttonStyle={{width:'100%',marginTop:60}}
                    fontSize={20}
                    fontWeight={`200`}
                    backgroundColor={`#a301bc`}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    entryStyle: {
        display:'flex',
        flex:1,
        marginTop: 20,
        width:'100%',
        height: '20%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    // inputStyle: {
    //     color: '#000',
    //     paddingRight: 5,
    //     paddingLeft: 5,
    //     fontSize: 18,
    //     lineHeight: 23,
    //     height: 40,
    //     borderColor: 'gray',
    //     borderWidth: 1
    // },
    // buttonStyle:{
    //     height: 40,
    //     width:'100%',
    //     borderColor: 'gray',
    //     borderWidth: 1,
    //    textAlign:'center'
    // },
});
export default App;