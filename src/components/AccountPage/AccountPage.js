import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
                <h4>
                        Hello "<b>{this.props.user.first_name}</b> <b>{this.props.user.last_name}</b>",
                </h4>
                <Button color="primary" onClick={this.handleClick}>My Listings</Button>
                <Button color="primary" onClick={this.handleClick2}>My Favorites</Button>
                <div className='account'>
                    
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Address</th>
                                <th>Remove</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                  
                    {this.state.status ? (
                        <>
                            {this.props.reduxState.accountListing.map(property => (
                            
                                    <tr key={property.id} className="property" >
                                    <td>{property.address}</td>
                                    <td><Button variant="outlined" color="secondary" onClick={() => this.removeListing(property)}>Remove Listing</Button></td>
                                    <td><Button variant="outlined" color="primary" onClick={() => this.editListing(property)}>Edit Listing</Button></td>
                                    </tr>
                                   
                               
                            ))}
                        </>
                    ) : (
                            <>
                                {this.props.reduxState.accountFavorite.map(favorite => (
                                        <tr key={favorite.id} className="favorite" >
                                        <td>{favorite.address}</td>
                                        <td><Button variant="outlined" color="secondary" onClick={() => this.removeFavorite(favorite)}>Remove Favorite</Button></td>
                                        </tr>
                                ))}
                            </>)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState,
    user: reduxState.user
});
export default connect(mapStateToProps)(AccountPage);
