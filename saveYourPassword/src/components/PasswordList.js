import React, {Component} from 'react';
import {ScrollView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import randomColor from 'randomcolor';
class PasswordList extends Component {
    constructor(props) {
        super(props);
        this.renderList = this.renderList.bind(this);
        this.state = {listPasswordsArray: null};
        this.expandPassword = this.expandPassword.bind(this);
    }

    expandPassword(key) {
        console.log(key);
    }

    renderList() {
        if (this.props.passwordList !== null) {
            return Object.keys(this.props.passwordList).map(key => {
                return (
                    <TouchableOpacity onPress={()=>{console.log(key)}} key={key}>
                        <View style={{width: 100, height: 100,margin:10,
                                      backgroundColor: randomColor(),justifyContent: 'center',
                                      alignItems: 'center'}}>
                            <Text style={{ fontWeight: 'bold',fontFamily:'Cookie-Regular'}}>{this.props.passwordList[key].service}</Text>
                        </View>
                    </TouchableOpacity>
                )
            });
        } else {
            return <View><Text>loading......</Text></View>;
        }
    }

    render() {
        return (
            <ScrollView style={{}}>
                <View style={{flexDirection: 'row',flexWrap:'wrap',justifyContent: 'space-between'}}>
                    {this.renderList()}
                </View>
            </ScrollView>
        )
    }
}

export default PasswordList ;