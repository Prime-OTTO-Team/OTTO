
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Pdf from "react-to-pdf";
const ref = React.createRef();

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

const styles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
});


class PdfExporter extends Component {

  
    render() {
        const { classes } = this.props;
        return (
            <div className='container'>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
                <div ref={ref}>
                    <h1>Hello CodeSandbox</h1>
                    <h2>Start editing to see some magic happen!</h2>
                </div>
           
          
                {/* <h1>Admin Property Page</h1> */}
                <h2>
                    Viewing Listings as Admin ({this.props.user.first_name})
                    </h2>
                {/* <Button color="primary" onClick={this.handleClick}>Active Listings</Button>
                <Button color="primary" onClick={this.handleClick2}>History of Listings</Button>
                {this.state.status ? (<h1>Active Listings:</h1>) : (<h1>Inactive Listings:</h1>)} */}

                <TableContainer className='admin'>
                    <br />
                    <Table className="table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Address</TableCell>
                                <TableCell align="center">Unit Number</TableCell>
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
                                            <TableCell align="center"><Button variant="outlined" color="primary" onClick={() => this.goToNdas(property.id)}>View Property NDA's</Button></TableCell>
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
                                                <TableCell align="center"><Button variant="outlined" color="primary" onClick={() => this.goToNdas(inactiveProperty.id)}>View Property NDA's</Button></TableCell>
                                            </TableRow>

                                        ))}
                                    </>)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
    errors: state.errors,
    user: state.user
});


export default connect(mapStateToProps)(withStyles(styles)(PdfExporter));