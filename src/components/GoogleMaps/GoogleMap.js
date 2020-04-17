import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import '../LandingPage/LandingPage.css'
class GoogleMap extends Component {
    state = {
        showingInfoWindow: false, 
        activeMarker: {},          
        selectedPlace: {} 
    };
    componentDidMount () {
        // this.addMarkers()   
    }
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
    render() {
        return (
            <div className="mapContainer">
                <Map
                    google={this.props.google}
                    zoom={10}
                    style={mapStyles}
                    initialCenter={{
                        lat: 44.9778,
                        lng: -93.2650
                    }}
                >
                    {this.props.markerLocations.map((marker) => {
                        console.log('marker: ', marker);
                            return (
                                <Marker position={{lat: marker.lat, lng: marker.lng }} />
                            )
                        })
                    }
                </Map>
            </div>
        )
    }
}
// const mapStateToProps = (reduxState) => ({
//     reduxState
// })

const mapStyles = {
    width: '800px',
    height: '800px',
};

export default GoogleApiWrapper({
    //TODO: 
    apiKey: 'AIzaSyCHElb_DfSY05GT5sQL4K_8PU8fWIE--xo'
    // apiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
})(GoogleMap);
// connect(mapStateToProps)
