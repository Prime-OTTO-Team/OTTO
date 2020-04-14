import React, { Component } from 'react';
import { connect } from 'react-redux';

class AccountPage extends Component {
    state = {
        status: true
    }
    componentDidMount() {
        this.getAccount();
    }
    getAccount = () => {
        this.props.dispatch({
            type: 'FETCH_ACCOUNT',
            payload: this.props.reduxState.user.id
        });
        console.log('in getAccount');
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
                <h1>AccountPage</h1>
                <button onClick={this.handleClick}>My Listings</button>
                <button onClick={this.handleClick2}>My Favorites</button>
                <div className='account'>
                    Here is where listings or favorites go. <br />
                    {this.state.status ? (
                        <div>
                            {this.props.reduxState.accountListing.map(property => (
                                <div key={property.id} className="property" >
                                    {property.address}<br />
                                </div>
                            ))}
                        </div>
                    ) : (
                            <div>
                                {this.props.reduxState.accountFavorite.map(favorite => (
                                    <div key={favorite.id} className="favorite" >
                                        {favorite.address}<br />
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
export default connect(mapStateToProps)(AccountPage);