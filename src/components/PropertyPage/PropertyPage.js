import React, { Component } from 'react';
import { connect } from 'react-redux';

class PropertyPage extends Component {

    state = {
        userId: '',
        address: '',
        unitNumber: '',
        city: '',
        state: '',
        zip_code: '55415',
        property_type: '',
        net_operating_income: '',
        gross_income: '',
        gross_expense: '',
        desired_price: '',
        propertyId: ''
    };

    componentDidMount() {
        this.setSingleProperty();
    }

    setSingleProperty = () => {
        let array = this.props.reduxState.propertyReducer
        let desiredId = this.props.reduxState.singlePropertyIdReducer
        for (let property of array) {
            console.log('loggign selected property', property);
            if (property.id == desiredId) {
                console.log('MATCH FOUND');
                this.setState({
                    address: property.address,
                    unitNumber: property.unitNumber,
                    city: property.city,
                    state: property.state,
                    zip_code: property.zip_code,
                    property_type: property.property_type,
                    net_operating_income: property.net_operating_income,
                    gross_income: property.gross_income,
                    gross_expense: property.gross_expense,
                    desired_price: property.desired_price,
                    propertyId: property.propertyId
                })
            }
        }
        console.log('logging state from setSignleProperty', this.state);
        
    }

    render() {
        return (
            <div className='container'>
                <h1>Property Page Map Goes Here</h1>
                {/* {this.props.reduxState.propertyReducer.map(property => ( */}

                <div key={this.state.id} className="active" >

                    {/* <b>Address:</b> {this.state.address} */}
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
                <button styles="flex-row:">Make an offer to Client</button>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState
})
export default connect(mapStateToProps)(PropertyPage);