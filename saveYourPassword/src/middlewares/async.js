import {Actions} from 'react-native-router-flux';
import {Alert}  from 'react-native';
import {_Alert} from '../components/common';
export default function ({ dispatch }) {
    return next => action => {
        // If action does not have payload
        // or, the payload does not have a .then property
        // we dont care about it, send it on
        if (!action.payload || !action.payload.then) {
            return next(action);
        }
        let actionType = action.type.slice(0, action.type.indexOf('_')).toLowerCase();
        // Make sure the action's promise resolves
        action.payload
            .then(function (response) {
                const newAction = {...action, payload: response};
                dispatch(newAction);
                actionType === 'add' && _Alert({
                    title: actionType,
                    msg: response.message || '',
                    successfully: 'successfully'
                });
                Actions.home();
            })
            .catch((user)=> {
                _Alert({title: actionType, msg: user.message, failed: 'failed'});
            });
    }
}