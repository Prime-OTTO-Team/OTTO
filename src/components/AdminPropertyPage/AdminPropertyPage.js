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
        return (
            <div className='container'>
                <h1>Admin Property Page</h1>
                <button onClick={this.handleClick}>Active Listings</button>
                <button onClick={this.handleClick2}>History of Listings</button>
                <div className='admin'>
                    <br/>
                    {this.state.status ? (
                        <div> These are active properties<br/>
                            {this.props.reduxState.adminPropertyReducer.map(property => (
                                <div key={property.id} className="active" >
                                    {property.address}<button onClick={() => this.removeListing(property)}>Remove Listing</button><br />
                                </div>
                            ))}
                        </div>
                    ) : (
                            <div> These are properties that were closed on<br/>
                                {this.props.reduxState.adminPropertyHistoryReducer.map(inactiveProperty => (
                                    <div key={inactiveProperty.id} className="inactive" >
                                        {inactiveProperty.address}<button onClick={() => this.deleteHistory(inactiveProperty.id)}>Delete History</button><br />
                                    </div>
                                ))}
                            </div>)}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState
});
export default connect(mapStateToProps)(AdminPropertyPage);