import React, { Component } from 'react';
import { connect } from 'react-redux';
import MiniMap from '../GoogleMaps/MiniMap';
import axios from 'axios';

class PropertyPage extends Component {

    state = {
        id: 1,
        address: '400 S 4th St',
        unitNumber: '',
        city: 'Minneapolis',
        state: 'MN',
        zip_code: 55415,
        property_type: 'Commercial',
        net_operating_income: '$200,000',
        gross_income: '$900,000',
        gross_expense: '$700,000',
        desired_price: '$60,000,000',
        lat: this.props.reduxState.detailedPropertyReducer.latitude,
        lng: this.props.reduxState.detailedPropertyReducer.longitude
    };
    componentDidMount() {
        this.setDetailedInformation();
    }
    setDetailedInformation = async () => {
        const detailedProperty = await this.props.reduxState.detailedPropertyReducer;
        if (detailedProperty != {}) {
            this.setState({
                id: detailedProperty.id,
                address: detailedProperty.address,
                unitNumber: detailedProperty.unit_number,
                city: detailedProperty.city,
                state: detailedProperty.state,
                zip_code: detailedProperty.zip_code,
                property_type: detailedProperty.property_type,
                net_operating_income: detailedProperty.net_operating_income,
                gross_income: detailedProperty.gross_income,
                gross_expense: detailedProperty.gross_expense,
                desired_price: detailedProperty.desired_price,
            })
        }
    }

    render() {
        return (
            <div className='container'>
                <MiniMap position={{ lat: this.state.lat, lng: this.state.lng }} />
                {/* {this.props.reduxState.propertyReducer.map(property => ( */}
                <div className="propertyDetailsWrapper">
                    <div key={this.state.id} className="active" >
                        <b>Address:</b> {this.state.address}
                        <br></br>
                        <b>City:</b> {this.state.city}
                        <br></br>
                        <b>State:</b> {this.state.state}
                        <br></br>
                        <b>Property Type:</b> {this.state.property_type}
                        <br></br>
                        <b>Zipcode:</b> {this.state.zip_code}
                        <br></br>
                        <b>Net operating Income:</b> {this.state.net_operating_income}
                        <br></br>
                        <b>Gross Income:</b> {this.state.gross_income}
                        <br></br>
                        <b>Gross Expense</b>: {this.state.gross_expense}
                        <br></br>
                        <b>Desired Price:</b> {this.state.desired_price}
                    </div>
                    {/* ))}                            */}
                    <button styles="flex-row:">Make an offer to Client
                    </button>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState
})
export default connect(mapStateToProps)(PropertyPage);