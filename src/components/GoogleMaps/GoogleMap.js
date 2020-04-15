import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {
    width: '50%',
    height: '50%wh'
};

class GoogleMap extends Component {
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
            />
        )
    }
}
// const mapStateToProps = (reduxState) => ({
//     reduxState
// })

export default GoogleApiWrapper({
    //during development this api key will be destroyed  until a proper method is implemented
    //TODO: 
    apiKey: ''
    // apiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
})(GoogleMap);
// connect(mapStateToProps)