import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { currencyFormatter } from '../Resources/currencyFormatter';
import Swal from 'sweetalert2';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ExportToCsv } from 'export-to-csv';

const options = {
    filename:'Otto User Export',
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'OTTO User Export',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
};
const csvExporter = new ExportToCsv(options);

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

class AdminPropertyPage extends Component {
    state = {
        status: true
    }

    componentDidMount() {
        this.getAdminProperty();
    }

    exportResults = (selectedGroup) => {
        csvExporter.generateCsv(selectedGroup);
    }

    getAdminProperty = () => {
        this.props.dispatch({
            type: 'FETCH_ADMIN_PROPERTY'
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
            confirmButtonColor: '#BE191D',
            cancelButtonColor: '#0087CB',
            confirmButtonText: 'Yes, delete listing history!'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Listing history deleted!'
                )
                this.props.dispatch({
                    type: 'DELETE_ADMIN_PROPERTY',
                    payload: data
                });
            }
        })
    }
    // This delete property history from the database. 

    render() {
        if (this.props.user.user_type == 1) {
            return (
                <div className='container'>
                    {/* <h1>Admin Property Page</h1> */}
                    <h2>
                        Viewing Listings as Admin ({this.props.user.first_name})
                    </h2>
                    <Button color="primary" onClick={this.handleClick}>Active Listings</Button>
                    <Button color="primary" onClick={this.handleClick2}>History of Listings</Button>
                    {this.state.status ? 
                    (<Button color="primary" variant="contained" onClick={()=>this.exportResults(this.props.reduxState.adminPropertyReducer)}>EXPORT ACTIVE LISTINGS</Button>) 
                    : (<Button color="primary" variant="contained" onClick={()=>this.exportResults(this.props.reduxtate.adminPropertyHistoryReducer)}>EXPORT EXPIRED LISTINGS</Button>)
                    } 
                    {this.state.status ? (<h1>Active Listings:</h1>) : (<h1>Inactive Listings:</h1>)}

                    <TableContainer className='admin'>
                        <br />
                        <Table className="table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">Email</TableCell>
                                    <TableCell align="center">Address</TableCell>
                                    <TableCell align="center">Unit Number</TableCell>
                                    <TableCell align="center">City</TableCell>
                                    <TableCell align="center">State</TableCell>
                                    <TableCell align="center">Zip Code</TableCell>
                                    <TableCell align="center">Property Type</TableCell>
                                    <TableCell align="center">Net Operating Income</TableCell>
                                    <TableCell align="center">Gross Income</TableCell>
                                    <TableCell align="center">Gross Expense</TableCell>
                                    <TableCell align="center">Desired Price</TableCell>
                                    <TableCell align="center">Remove Listing</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.status ? (
                                    <>
                                        {this.props.reduxState.adminPropertyReducer.map(property => (

                                            <TableRow key={property.id} className="active" >
                                                <TableCell align="center">{property.first_name} {property.last_name}</TableCell>
                                                <TableCell align="center">{property.username}</TableCell>
                                                <TableCell align="center">{property.address}</TableCell>
                                                <TableCell align="center">{property.unit_number}</TableCell>
                                                <TableCell align="center">{property.city}</TableCell>
                                                <TableCell align="center">{property.state}</TableCell>
                                                <TableCell align="center">{property.zip_code}</TableCell>
                                                <TableCell align="center">{property.property_type}</TableCell>
                                                <TableCell align="center">{currencyFormatter(property.net_operating_income)}</TableCell>
                                                <TableCell align="center">{currencyFormatter(property.gross_income)}</TableCell>
                                                <TableCell align="center">{currencyFormatter(property.gross_expense)}</TableCell>
                                                <TableCell align="center">{currencyFormatter(property.desired_price)}</TableCell>
                                                <TableCell align="center"><Button variant="outlined" color="secondary" onClick={() => this.removeListing(property)}>Remove Listing</Button></TableCell>

                                            </TableRow>

                                        ))}
                                    </>
                                ) : (
                                        <>
                                            {this.props.reduxState.adminPropertyHistoryReducer.map(inactiveProperty => (
                                                <TableRow key={inactiveProperty.id} className="inactive" >
                                                    <TableCell align="center">{inactiveProperty.first_name} {inactiveProperty.last_name}</TableCell>
                                                    <TableCell align="center">{inactiveProperty.username}</TableCell>
                                                    <TableCell align="center">{inactiveProperty.address}</TableCell>
                                                    <TableCell align="center">{inactiveProperty.unit_number}</TableCell>
                                                    <TableCell align="center">{inactiveProperty.city}</TableCell>
                                                    <TableCell align="center">{inactiveProperty.state}</TableCell>
                                                    <TableCell align="center">{inactiveProperty.zip_code}</TableCell>
                                                    <TableCell align="center">{inactiveProperty.property_type}</TableCell>
                                                    <TableCell align="center">{currencyFormatter(inactiveProperty.net_operating_income)}</TableCell>
                                                    <TableCell align="center">{currencyFormatter(inactiveProperty.gross_income)}</TableCell>
                                                    <TableCell align="center">{currencyFormatter(inactiveProperty.gross_expense)}</TableCell>
                                                    <TableCell align="center">{currencyFormatter(inactiveProperty.desired_price)}</TableCell>
                                                    <TableCell align="center"><Button variant="outlined" color="secondary" onClick={() => this.deleteHistory(inactiveProperty.id)}>Delete History</Button></TableCell>
                                                </TableRow>

                                            ))}
                                        </>)}
                            </TableBody>
                        </Table>
                    </TableContainer>
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
// All the information is being rendering onto the page

const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState,
    user: reduxState.user
});
export default connect(mapStateToProps)(AdminPropertyPage);
