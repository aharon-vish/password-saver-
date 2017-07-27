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
                    <TouchableOpacity onPress={()=>{debugger;}}>
                    <View style={{margin:10,width: 100, height: 100,backgroundColor: randomColor()}} key={key}
                          onPress={()=>{debugger;}}
                          >
                        <Text>{this.props.passwordList[key].service}</Text>
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
            <ScrollView style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row',flexWrap:'wrap'}}>
                    {this.renderList()}
                </View>
            </ScrollView>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        height: 10,
        borderColor: 'black',
        borderWidth: 1,
        margin: 10
    }
});


//<Avatar
//    title={this.props.passwordList[key].service}
//    avatarStyle={{fontSize:10}}
//    key={key}
//    rounded
//    medium
//    overlayContainerStyle={{backgroundColor: randomColor()}}
//    onPress={this.expandPassword.bind(this,key)}
///>
export default PasswordList ;