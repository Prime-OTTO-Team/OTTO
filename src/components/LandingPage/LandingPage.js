import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginSignUpModal from '../Modals/LoginSignUpModal';
class LandingPage extends Component {
    render() {
        return (
            <div className='container'>
                <LoginSignUpModal/>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState
});

export default connect(mapStateToProps)(LandingPage);