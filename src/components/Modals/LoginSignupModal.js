import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import SignUpContent from './SignUpContent'
import LonginContent from './LonginContent';

class test extends Component {
    render() {
        return (
            <div>
            <SignUpContent/>
           <LonginContent/>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState
})
export default connect(mapStateToProps)(test);