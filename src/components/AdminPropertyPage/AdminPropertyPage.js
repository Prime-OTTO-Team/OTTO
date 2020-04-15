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
    render() {
        return (
            <div className='container'>
                <h1>Admin Property Page</h1>
                <button onClick={this.handleClick}>My Listings</button>
                <button onClick={this.handleClick2}>My Favorites</button>
                <div className='admin'>
                    Here is a list of all the properties (no difference in active or inactive yet)<br />
                    {this.state.status ? (
                        <div>
                            {this.props.reduxState.adminPropertyReducer.map(activeProperty => (
                                <div key={activeProperty.id} className="active" >
                                    {activeProperty.address} Active Status: {activeProperty.active}<br />
                                </div>
                            ))}
                        </div>
                    ) : (
                            <div>
                                {this.props.reduxState.adminPropertyReducer.map(inactiveProperty => (
                                    <div key={inactiveProperty.id} className="inactive" >
                                        {inactiveProperty.address}<br />
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