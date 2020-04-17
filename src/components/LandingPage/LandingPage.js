import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginSignUpModal from '../Modals/LoginSignupModal';
import GoogleMap from '../GoogleMaps/GoogleMap';
import Listings from './Listings';
import './LandingPage.css'
class LandingPage extends Component {
    render() {
        return (
            <div className='container'>
                <LoginSignUpModal />
                <div className="mapListingContainer">
                    <Listings />
                    <GoogleMap 
                    markerLocations={[
                        {lat: 45.00682,
                        lng: -93.04485},
                        {lat: 45.03682,
                        lng: -93.02485}
                    ]}
                    />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState
});

export default connect(mapStateToProps)(LandingPage);