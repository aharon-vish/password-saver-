import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Home from './components/Home';

const RouterComponent = ()=> {
    return (
        <Router sceneStyle={{paddingTop:65}}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm}  title="Log In"/>
                <Scene key="registration" component={RegistrationForm}
                       backTitle="Log In"
                       title="Registrar"/>
            </Scene>
            <Scene key="home" component={Home}/>
        </Router>
    );
};

export default RouterComponent;