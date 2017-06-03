import React, {Component} from 'react';
import  {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import  ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <LoginForm/>
            </Provider>
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