import React, {Component} from 'react';
import { connect } from 'react-redux';
 
class PropertyPage extends Component {
    render() {
        return (
            <div className='container'>
                <h1>Property Page Map Goes Here</h1>
                {this.props.reduxState.propertyReducer.map(property => (
                                   
                                    <div key={property.id} className="active" >
                                        
                                        Address: {property.address} City: {property.city} State:{property.state} Property Type{property.property_type} Zipcode{property.zip_code} 
                                        Net operating Income: {property.net_operating_income} Gross Income: {property.gross_income} Gross Expense: {property.gross_expense} 
                                        Desired Price: {property.desired_price}
                                        </div>
                ))}                           
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