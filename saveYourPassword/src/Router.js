import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Home from './components/Home';
import NewPasswordForm from './components/NewPasswordForm';
import requireAuth from './hoc/Auth-require';

const RouterComponent = ()=> {
    return (
        <Router sceneStyle={{paddingTop:65}}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm}  title="Log In"/>
                <Scene key="registration" component={RegistrationForm}
                       backTitle="Log In"
                       title="Registrar"/>
            </Scene>
            <Scene key="home" renderBackButton={()=>(null)} component={requireAuth(Home)}/>
            <Scene key="newPasswordForm" backTitle="Back" component={requireAuth(NewPasswordForm)}/>
        </Router>
    );
};

export default RouterComponent;