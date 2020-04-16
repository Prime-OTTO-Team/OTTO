import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginSignUpModal from '../Modals/LoginSignupModal';
import GoogleMap from '../GoogleMaps/GoogleMap'
class LandingPage extends Component {
    render() {
        return (
            <div className='container'>
                <LoginSignUpModal/>
                <GoogleMap/>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState
});

export default connect(mapStateToProps)(LandingPage);