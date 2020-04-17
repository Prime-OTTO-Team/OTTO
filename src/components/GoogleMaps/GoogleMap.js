import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';

class GoogleMap extends Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };
    componentDidMount() {
        this.getPropertyLocations();
    }
    getPropertyLocations = () => {
        const markerLocations = this.props.markerLocations;
        if (!markerLocations) {
            return console.log('marker locations undefined');
        } else {
            return markerLocations;
        }
    }
    addMarkers = () => {

    }
    
    render() {
        // console.log('process.env', process.env)
        // console.log('API KEY: ', process.env.GOOGLE_MAPS_API_KEY);
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: 44.9778,
                    lng: -93.2650
                }}
            >
                <Marker
                >

                </Marker>
            </Map>
        )
    }
}
// const mapStateToProps = (reduxState) => ({
//     reduxState
// })

const mapStyles = {
    width: '50%',
    height: '30px'
};


export default GoogleApiWrapper({
    //during development this api key will be destroyed  until a proper method is implemented
    //TODO: 
    apiKey: 'AIzaSyCHElb_DfSY05GT5sQL4K_8PU8fWIE--xo'
    // apiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
})(GoogleMap);
// connect(mapStateToProps)
