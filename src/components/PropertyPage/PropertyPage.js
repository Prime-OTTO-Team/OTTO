import React, { Component } from 'react';
import { connect } from 'react-redux';
import MiniMap from '../GoogleMaps/MiniMap';
import axios from 'axios';
import { currencyFormatter } from '../Resources/currencyFormatter';
import Button from '@material-ui/core/Button';

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
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Address</th>
                                    <th>Unit Number</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Zip Code</th>
                                    <th>Property Type</th>
                                    <th>Net Operating Income</th>
                                    <th>Gross Income</th>
                                    <th>Gross Expense</th>
                                    <th>Desired Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <td>{this.state.address}</td>
                                <td>{this.state.unit_number}</td>
                                <td>{this.state.city}</td>
                                <td>{this.state.state}</td>
                                <td>{this.state.zip_code}</td>
                                <td>{this.state.property_type}</td>
                                <td>{currencyFormatter(this.state.net_operating_income)}</td>
                                <td>{currencyFormatter(this.state.gross_income)}</td>
                                <td>{currencyFormatter(this.state.gross_expense)}</td>
                                <td>{currencyFormatter(this.state.desired_price)}</td>
                            </tbody>
                        </table>
                    </div>
                    {/* ))}                            */}
                    <Button variant="contained" color="primary" styles="flex-row:">Make an offer to Client
                    </Button>
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