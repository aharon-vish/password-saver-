import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

const RouterComponent = ()=> {
    return (
        <Router sceneStyle={{paddingTop:65}}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm}/>
                <Scene key="registration" component={RegistrationForm} title="Registration"/>
            </Scene>
        </Router>
    );
};

export default RouterComponent;