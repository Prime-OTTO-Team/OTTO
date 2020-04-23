import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.js'

class GoogleMap extends Component {
    state = {
        defaultCenter : {
            lat: 44.9778,
            lng: -93.2650
        },
        center: {
            lat: 44.9778,
            lng: -93.2650
        },
        zoom: 11
    };
    centerMap = (latitude, longitude) => {
        console.log('in centerMap');
        this.setState({
            center: {
                lat: latitude, lng: longitude
            }
        })
    }

    renderMarkers = () => {
        if (this.props.markerLocations) {
            return this.props.markerLocations.map((marker) => {
                return (
                    <Marker
                        key={marker.id}
                        lat={marker.latitude}
                        lng={marker.longitude}
                        name="My Marker"
                        color="rgb(222, 213, 16)"
                        onClick={() => { 
                            this.centerMap(marker.latitude, marker.longitude) }}
                    />
                )
            })
        } else {
            console.log('cannot get marker locations');
        }
    }
    changeMapCenter = (coordinates) => {
        this.setState({
            mapCenter: coordinates
        })
    }
    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '70vh', width: '90%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCHElb_DfSY05GT5sQL4K_8PU8fWIE--xo' }}
                    defaultCenter={this.state.defaultCenter}
                    center={this.state.center}
                    defaultZoom={this.state.zoom}
                >
                    {this.renderMarkers()}
                </GoogleMapReact>
            </div>
        );
    }
}
export default GoogleMap;