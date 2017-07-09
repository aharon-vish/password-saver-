import {Alert}  from 'react-native';

const _Alert = ({title,msg,failed,successfully}) => {
    Alert.alert(
        `${title} ${failed || successfully}`,
        msg,
        [
            {text: 'Cancel', style: 'cancel'}
        ],
        {cancelable: false}
    )
};
export {_Alert};