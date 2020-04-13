import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import LoginConent from './LoginContent'
import SignUpContent from './SignUpContent'

class test extends Component {
    render() {
        return (
            <div>
            <SignUpContent/>
           <LoginConent/>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState
})
export default connect(mapStateToProps)(test);