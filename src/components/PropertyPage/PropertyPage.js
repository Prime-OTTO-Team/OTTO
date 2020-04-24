import React, {Component} from 'react';
import { connect } from 'react-redux';
 
class PropertyPage extends Component {

    state = {
        id:1,
        userId: 2,
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
        propertyId: 45
        };
    
    render() {
        return (
            <div className='container'>
                <h1>Property Page Map Goes Here</h1>
                {/* {this.props.reduxState.propertyReducer.map(property => ( */}
                                   
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