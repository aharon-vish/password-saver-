import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity}  from 'react-native';
import {Icon} from 'react-native-elements'
class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                    <Icon
                        iconStyle={{}}
                        raised
                        name='plus'
                        type='font-awesome'
                        color='#fff'
                        containerStyle={{backgroundColor: `#a301bc`,position:'absolute',bottom:15,right:15}}
                        onPress={() => console.log('hello')}/>
            </View>
        );
    }
}
export default Home ;