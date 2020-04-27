import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.js'

class MiniMap extends Component {
    state = {
        defaultCenter: {
            lat: this.props.position.lat,
            lng: this.props.position.lat
        },
        // center: {
        //     lat: 44.9778,
        //     lng: -93.2650
        // },
        zoom: 18
    };
    // centerMap = (latitude, longitude) => {
    //     console.log('in centerMap');
    //     this.setState({
    //         center: {
    //             lat: latitude, lng: longitude
    //         }
    //     })
    // }
    render() {
        if (this.props.position) {
            return (
                <div style={{ height: '300px', width: '300px' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyCHElb_DfSY05GT5sQL4K_8PU8fWIE--xo' }}
                        defaultCenter={this.props.defaultCenter}
                        defaultZoom={this.state.zoom}
                    >
                        <Marker
                            lat={this.props.defaultCenter.lat}
                            lng={this.props.defaultCenter.lng}
                            color="rgb(222, 213, 16)"
                        />
                    </GoogleMapReact>
                </div>
            );
        }
    }
}
export default MiniMap;