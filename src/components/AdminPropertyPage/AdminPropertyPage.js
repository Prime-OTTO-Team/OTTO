import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currencyFormatter } from '../Resources/currencyFormatter';
import Swal from 'sweetalert2';

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
        Swal.fire({
            title: 'Are you sure you want to delete this listing history?',
            text: 'This cannot be undone!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#fec52d',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete listing history!'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Listing history delted!'
                )
                this.props.dispatch({
                    type: 'DELETE_ADMIN_PROPERTY',
                    payload: data
                });
            }
        })
       
    }

    render() {
        if (this.props.user.user_type == 1) {
            return (
                <div className='container'>
                    {/* <h1>Admin Property Page</h1> */}
                    <h2>
                        Viewing Listings as Admin ({this.props.user.first_name})
                    </h2>
                    <button onClick={this.handleClick}>Active Listings</button>
                    <button onClick={this.handleClick2}>History of Listings</button>
                    {this.state.status ? (<h1>Active Listings:</h1>) : (<h1>Inactive Listings:</h1>)}
                    <div className='admin'>
                        <br />
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
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
                                                <td>{property.first_name} {property.last_name}</td>
                                                <td>{property.username}</td>
                                                <td>{property.address}</td>
                                                <td>{property.unit_number}</td>
                                                <td>{property.city}</td>
                                                <td>{property.state}</td>
                                                <td>{property.zip_code}</td>
                                                <td>{property.property_type}</td>
                                                <td>{currencyFormatter(property.net_operating_income)}</td>
                                                <td>{currencyFormatter(property.gross_income)}</td>
                                                <td>{currencyFormatter(property.gross_expense)}</td>
                                                <td>{currencyFormatter(property.desired_price)}</td>
                                                <td><button onClick={() => this.removeListing(property)}>Remove Listing</button></td>
                                            </tr>
                                        ))}
                                    </>
                                ) : (
                                        <>
                                            {this.props.reduxState.adminPropertyHistoryReducer.map(inactiveProperty => (
                                                <tr key={inactiveProperty.id} className="inactive" >
                                                    <td>{inactiveProperty.first_name} {inactiveProperty.last_name}</td>
                                                    <td>{inactiveProperty.username}</td>
                                                    <td>{inactiveProperty.address}</td>
                                                    <td>{inactiveProperty.unit_number}</td>
                                                    <td>{inactiveProperty.city}</td>
                                                    <td>{inactiveProperty.state}</td>
                                                    <td>{inactiveProperty.zip_code}</td>
                                                    <td>{inactiveProperty.property_type}</td>
                                                    <td>{currencyFormatter(inactiveProperty.net_operating_income)}</td>
                                                    <td>{currencyFormatter(inactiveProperty.gross_income)}</td>
                                                    <td>{currencyFormatter(inactiveProperty.gross_expense)}</td>
                                                    <td>{currencyFormatter(inactiveProperty.desired_price)}</td>
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
