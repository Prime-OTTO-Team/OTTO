import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class AccountPage extends Component {
    state = {
        status: true
    }
    editListing(data) {
        console.log('Edit doesnt do anything yet');
        this.props.dispatch({
            type: 'EDIT_LISTING',
            payload: data
        });
        this.props.dispatch({
            type: 'EDIT_MODE'
        });
        this.props.history.push("/PropertyInputPage");
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_ACCOUNT'
        });
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

    removeFavorite = (data) => {
        this.props.dispatch({
            type: 'DELETE_FAVORITE',
            payload: data
        })
    }

    removeListing = (data) => {
        this.props.dispatch({
            type: 'UPDATE_PROPERTY',
            payload: data
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
                                    {property.address}
                                    <button onClick={() => this.removeListing(property)}>Remove Listing</button>
                                    <button onClick={() => this.editListing(property)}>Edit Listing</button><br />
                                </div>
                            ))}
                        </div>
                    ) : (
                            <div>
                                {this.props.reduxState.accountFavorite.map(favorite => (
                                    <div key={favorite.id} className="favorite" >
                                        {favorite.address}<button onClick={() => this.removeFavorite(favorite)}>Remove Favorite</button><br />
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