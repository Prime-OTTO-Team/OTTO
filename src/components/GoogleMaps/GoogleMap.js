import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';

class GoogleMap extends Component {
    geocode = async (address) => {
        try {
            const rawResponse = await axios.get(
                'https://maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: address,
                    key: ''
                }
            }
            )
            console.log('geocode location: ', rawResponse.data.results[0].geometry.location);
        } catch (error) {
            //the only time this error will occur is if the key is invalid
            console.log('geocode error: ', error);
        }
    }
    render() {
        // console.log('process.env', process.env)
        // console.log('API KEY: ', process.env.GOOGLE_MAPS_API_KEY);
        this.geocode('55109');
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: 44.9778,
                    lng: -93.2650
                }}
            />
        )
    }
}
// const mapStateToProps = (reduxState) => ({
//     reduxState
// })

const mapStyles = {
    width: '50%',
    height: '50%wh'
};


export default GoogleApiWrapper({
    //during development this api key will be destroyed  until a proper method is implemented
    //TODO: 
    apiKey: ''
    // apiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
})(GoogleMap);
// connect(mapStateToProps)