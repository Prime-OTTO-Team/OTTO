import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.js'

class MiniMap extends Component {
    state = {
        defaultCenter: {
            lat: Number( this.props.position.lat ),
            lng: Number( this.props.position.lng )
        },
        // center: {
        //     lat: 44.9778,
        //     lng: -93.2650
        // },
        zoom: 16
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
                <div style={{ height: '500px', width: '500px' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyCHElb_DfSY05GT5sQL4K_8PU8fWIE--xo' }}
                        defaultCenter={this.state.defaultCenter}
                        defaultZoom={this.state.zoom}
                    >
                        <Marker
                            lat={this.props.position.lat}
                            lng={this.props.position.lng}
                            color="rgb(222, 213, 16)"
                        />
                    </GoogleMapReact>
                </div>
            );
        }
    }
}
export default MiniMap;