import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export default function (ComposedComponent) {
    class Authentication extends Component {
        //static contextTypes = {
        //    router: React.PropTypes.object
        //}

        componentWillMount() {
            !firebase.auth().currentUser &&  Actions.auth();
            if(firebase.auth().currentUser &&
                this.props.authenticated.email !== firebase.auth().currentUser.email){
                Actions.auth();
            }
        }

        componentWillUpdate(nextProps) {
            !firebase.auth().currentUser &&  Actions.auth();
            if(firebase.auth().currentUser &&
                this.props.authenticated.email !== firebase.auth().currentUser.email){
                Actions.auth();
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return {authenticated: state.auth.user};
    }

    return connect(mapStateToProps)(Authentication);
}
