import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminPropertyPage extends Component {
    state = {
        status: true
    }

    componentDidMount() {
        this.getAdminProperty();
    }

    getAdminProperty = () => {
        this.props.dispatch({
            type: 'FETCH_ADMIN_PROPERTY'
        });
        console.log('in getAdminProperty');
    }

    handleClick = () => {
        this.setState({
            status: true
        })
    }

    handleClick2 = () => {
        this.setState({
            status: false
        })
    }

    removeListing(data) {
        this.props.dispatch({
            type: 'UPDATE_ADMIN_PROPERTY',
            payload: data
        });
    }

    deleteHistory(data) {
        this.props.dispatch({
            type: 'DELETE_ADMIN_PROPERTY',
            payload: data
        });
    }

    render() {
        if (this.props.user.user_type == 1) {
            return (
                <div className='container'>
                    <h1>Admin Property Page</h1>
                    <h4>
                        Welcome <b>{this.props.user.first_name}</b> <b>{this.props.user.last_name}</b>
                    </h4>
                    <button onClick={this.handleClick}>Active Listings</button>
                    <button onClick={this.handleClick2}>History of Listings</button>
                    <div className='admin'>
                        <br />
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
                                    <th>Remove Listing</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.status ? (
                                    <>
                                        {this.props.reduxState.adminPropertyReducer.map(property => (
                                            <tr key={property.id} className="active" >
                                                <td>{property.address}</td>
                                                <td>{property.unit_number}</td>
                                                <td>{property.city}</td>
                                                <td>{property.state}</td>
                                                <td>{property.zip_code}</td>
                                                <td>{property.property_type}</td>
                                                <td>{property.net_operating_income}</td>
                                                <td>{property.gross_income}</td>
                                                <td>{property.gross_expense}</td>
                                                <td>{property.desired_price}</td>
                                                <td><button onClick={() => this.removeListing(property)}>Remove Listing</button></td>
                                            </tr>
                                        ))}
                                    </>
                                ) : (
                                        <>
                                            {this.props.reduxState.adminPropertyHistoryReducer.map(inactiveProperty => (
                                                <tr key={inactiveProperty.id} className="inactive" >
                                                    <td>{inactiveProperty.address}</td>
                                                    <td>{inactiveProperty.unit_number}</td>
                                                    <td>{inactiveProperty.city}</td>
                                                    <td>{inactiveProperty.state}</td>
                                                    <td>{inactiveProperty.zip_code}</td>
                                                    <td>{inactiveProperty.property_type}</td>
                                                    <td>{inactiveProperty.net_operating_income}</td>
                                                    <td>{inactiveProperty.gross_income}</td>
                                                    <td>{inactiveProperty.gross_expense}</td>
                                                    <td>{inactiveProperty.desired_price}</td>
                                                    <td><button onClick={() => this.deleteHistory(inactiveProperty.id)}>Delete History</button></td>
                                                </tr>
                                            ))}
                                        </>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        } else {
            return (
                <>
                    <h1>You are not admin and do not have permission to see this content.</h1>
                </>
            )
        }
    }
}

const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState,
    user: reduxState.user
});
export default connect(mapStateToProps)(AdminPropertyPage);
