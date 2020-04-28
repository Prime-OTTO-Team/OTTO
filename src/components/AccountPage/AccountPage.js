import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { currencyFormatter } from '../Resources/currencyFormatter';
import Swal from 'sweetalert2';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#BE191D'
        },
        primary: {
            main: '#0087CB'
        }

    },
});


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
        Swal.fire({
            title: 'Are you sure you want to remove this favorite?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#BE191D',
            cancelButtonColor: '#0087CB',
            confirmButtonText: 'Yes, remove favorite!'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Favorite removed!'
                )
                this.props.dispatch({
                    type: 'DELETE_FAVORITE',
                    payload: data
                })
            }
        })
    }

    removeListing = (data) => {
        Swal.fire({
            title: 'Are you sure you want to delete this listing?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#BE191D',
            cancelButtonColor: '#0087CB',
            confirmButtonText: 'Yes, delete listing!'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Listing removed!'
                )
                this.props.dispatch({
                    type: 'UPDATE_PROPERTY',
                    payload: data
                })
            }
        })
        
    }

    render() {
        return (
            <div className='container'>
                <MuiThemeProvider theme={theme}>
                <h2>
                        {this.props.user.first_name}, here is your Account
                </h2>
               
                  <Button color="primary" onClick={this.handleClick}>My Listings</Button>
                <Button color="primary" onClick={this.handleClick2}>My Favorites</Button>
                
                {this.state.status ? (<h1>Listings:</h1>):(<h1>Favorites:</h1>)}

                <div className='account'>
                    
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Address</th>
                                <th>Price</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                         
                    {this.state.status ? (
                        <>
                                  
                            {this.props.reduxState.accountListing.map(property => (
                            
                                    <tr key={property.id} className="property" >
                                    <td>{property.address}</td>
                                    <td>{currencyFormatter(property.desired_price)}</td>
                                    
                                    <td><Button variant="outlined" color="secondary" onClick={() => this.removeListing(property)}>Delete Listing</Button></td>
                                    <td><Button variant="outlined" color="primary" onClick={() => this.editListing(property)}>Edit Listing</Button></td>
                                    
                                    </tr>
                                   
                               
                            ))}
                        </>
                    ) : (
                            <>
                                {this.props.reduxState.accountFavorite.map(favorite => (
                                        <tr key={favorite.id} className="favorite" >
                                        <td>{favorite.address}</td>
                                        <td>{currencyFormatter(favorite.desired_price)}</td>
                                        
                                         <td><Button variant="outlined" color="secondary" onClick={() => this.removeFavorite(favorite)}>Remove Favorite</Button></td>
                                       
                                        <td></td>
                                        </tr>
                                ))}
                            </>)}
                          
                        </tbody>
                    </table>
                </div>
                </MuiThemeProvider>
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
