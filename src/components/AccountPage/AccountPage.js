import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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
                    type: 'UPDATE_ACCOUNT_PROPERTY',
                    payload: data
                })
            }
        })

    }

    render() {
        return (
            <div className='container'>
         
                <h2>
                    {this.props.user.first_name}, here is your Account
                </h2>
                <Button color="primary" onClick={this.handleClick}>My Listings</Button>
                <Button color="primary" onClick={this.handleClick2}>My Favorites</Button>
                {this.state.status ? (<h1>Listings:</h1>) : (<h1>Favorites:</h1>)}

                <TableContainer className='account'>

                    <Table className="table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Address</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">Delete</TableCell>
                                <TableCell align="center">Edit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {this.state.status ? (
                                <>
                                    {this.props.reduxState.accountListing.map(property => (

                                        <TableRow key={property.id} className="property" >
                                            <TableCell align="center">{property.address}</TableCell>
                                            <TableCell align="center">{currencyFormatter(property.desired_price)}</TableCell>
                                            <TableCell align="center"><Button variant="outlined" color="secondary" onClick={() => this.removeListing(property)}>Delete Listing</Button></TableCell>
                                            <TableCell align="center"><Button variant="outlined" color="primary" onClick={() => this.editListing(property)}>Edit Listing</Button></TableCell>


                                        </TableRow>


                                    ))}
                                </>
                            ) : (
                                    <>
                                        {this.props.reduxState.accountFavorite.map(favorite => (
                                            <TableRow key={favorite.id} className="favorite" >
                                                <TableCell align="center">{favorite.address}</TableCell>
                                                <TableCell align="center">{currencyFormatter(favorite.desired_price)}</TableCell>
                                                <TableCell align="center"><Button variant="outlined" color="secondary" onClick={() => this.removeFavorite(favorite)}>Remove Favorite</Button></TableCell>
                                                <TableCell align="center"><Button variant="outlined" disabled>Edit</Button></TableCell>
                                            </TableRow>
                                        ))}
                                    </>)}
                        </TableBody>
                    </Table>
                </TableContainer>

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
