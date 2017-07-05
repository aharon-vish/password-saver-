import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity}  from 'react-native';
import {Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import PasswordList from './PasswordList';
class Home extends Component {
    constructor(props) {
        super(props);
    }

    koko() {
        Actions.newPasswordForm();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <PasswordList/>
                <Icon
                    iconStyle={{}}
                    raised
                    name='plus'
                    type='font-awesome'
                    color='#fff'
                    containerStyle={{backgroundColor: `#a301bc`, position: 'absolute', bottom: 15, right: 15}}
                    onPress={this.koko}/>
            </View>
        );
    }
}
export default Home ;