import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import LoginSignUpModal from '../Modals/LoginSignupModal';
import GoogleMap from '../GoogleMaps/GoogleMap';
import Listings from './Listings';
import './LandingPage.css';
import { ScrollBox, ScrollAxes, FastTrack } from 'react-scroll-box';


class LandingPage extends Component {
    //TODO: set local state "properties" to a redux reducer
    state = {
        properties: '',
        expanded: 0
    }
    componentDidMount() {
        this.getProperties();
        console.log('ScrollAxes', ScrollAxes);
        
    }
    getProperties = async () => {
        try {
            const response = await axios({
                url: 'api/property/public',
                method: 'GET'
            })
            this.setState({
                properties: response.data
            })
            this.props.dispatch({
                type: 'SET_PROPERTY',
                payload: response.data
            })
            console.log('this.state.properties', this.state.properties);
        } catch (error) {
            console.log('getProperties error: ', error)
        }

    }

    handlePanelChange = (id) => {
        if (id != this.state.expanded) {
            this.setState({
                expanded: id
            })
        } else {
            this.setState({
                expanded: 0
            })
        }
    }
    render() {
        return (
            <div>
                <LoginSignUpModal />
                <div className="mapListingContainer">
                    {/* <ScrollBox 
                        style={{ height: '400px' }} 
                        // axes={ScrollAxes.X} 
                        // fastTrack={FastTrack.PAGING}
                    > */}
                    <Listings
                            properties={this.state.properties}
                            handlePanelChange={this.handlePanelChange}
                            expanded={this.state.expanded}
                        />
                    {/* </ScrollBox> */}
                    <div className="mapContainer">
                        <GoogleMap markerLocations={this.state.properties} />
                    </div>
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