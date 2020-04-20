
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 375,
        marginTop: theme.spacing(-1)
    }
});

class PropertyInputPage extends Component {
    state = {
        userId: this.props.user.id,
        address: this.props.edit.address,
        unitNumber: this.props.edit.unit_number,
        city: this.props.edit.city,
        state: this.props.edit.state,
        zipCode: this.props.edit.zip_code,
        propertyType: this.props.edit.property_type,
        netOperatingIncome: this.props.edit.net_operating_income,
        grossIncome: this.props.edit.gross_income,
        grossExpense: this.props.edit.gross_expense,
        desiredPrice: this.props.edit.desired_price,
        propertyId: this.props.edit.id
    };

    componentWillUnmount = () => {
        this.props.dispatch({ type: 'UNEDIT_MODE' });
        this.props.dispatch({ type: 'UNEDIT_LISTING' });
    }

    alumniRegistration = (event) => {
        event.preventDefault();
        console.log('firing alumniRegistration with object:', this.state);
        if (this.props.editMode === true) {
            this.props.dispatch({
                type: 'UPDATE_PROPERTY',
                payload: this.state
            })
        }
        else {
            this.props.dispatch({
                type: 'ADD_PROPERTY',
                payload: this.state
            })
            
        }
        
        console.log('this is the user', this.props.user);
        // this.props.history.push('/account');
    } // end alumniRegistration

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Add Property
        </Typography>
                    <form className={classes.form} noValidate onSubmit={this.alumniRegistration}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete="address-line1"
                                    name="address"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="address"
                                    label="Address"
                                    autoFocus
                                    value={this.state.address}
                                    onChange={this.handleInputChangeFor('address')}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="unitNumber"
                                    label="Unit Number"
                                    name="lastName"
                                    autoComplete="address-line1"
                                    value={this.state.unitNumber}
                                    onChange={this.handleInputChangeFor('unitNumber')}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} >
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="city"
                                    label="City"
                                    name="city"
                                    autoComplete="address-level2"
                                    value={this.state.city}
                                    onChange={this.handleInputChangeFor('city')}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="state"
                                    label="State"
                                    name="state"
                                    autoComplete="address-level1"
                                    value={this.state.state}
                                    onChange={this.handleInputChangeFor('state')}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="zipCode"
                                    label="Zip Code"
                                    autoComplete="postal-code"
                                    type="zipCode"
                                    name="zipCode"
                                    value={this.state.zipCode}
                                    onChange={this.handleInputChangeFor('zipCode')}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="propertyType"
                                    label="Property Type"
                                    type="propertyType"
                                    name="propertyType"
                                    value={this.state.propertyType}
                                    onChange={this.handleInputChangeFor('propertyType')}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="netOperatingIncome"
                                    label="Net Operating Income"
                                    type="netOperatingIncome"
                                    name="netOperatingIncome"
                                    value={this.state.netOperatingIncome}
                                    onChange={this.handleInputChangeFor('netOperatingIncome')}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="grossIncome"
                                    label="Gross Income"
                                    type="grossIncome"
                                    name="grossIncome"
                                    value={this.state.grossIncome}
                                    onChange={this.handleInputChangeFor('grossIncome')}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="grossExpense"
                                    label="Gross Expense"
                                    type="grossExpense"
                                    name="grossExpense"
                                    value={this.state.grossExpense}
                                    onChange={this.handleInputChangeFor('grossExpense')}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="desiredPrice"
                                    label="Desired Sale Price"
                                    type="desiredPrice"
                                    name="desiredPrice"
                                    value={this.state.desiredPrice}
                                    onChange={this.handleInputChangeFor('desiredPrice')}
                                />
                            </Grid>

                        </Grid>
                        <Button variant="contained" color="primary"
                            className={classes.submit}
                            fullWidth
                            variant="contained"
                            type="submit"
                            name="submit"
                            value="Register"
                        >
                            Register
              </Button>

                    </form>



                </div>
            </Container>
        );
    }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
    errors: state.errors,
    user: state.user,
    edit: state.editListingReducer,
    editMode: state.editModeReducer
});

export default connect(mapStateToProps)(withStyles(styles)(PropertyInputPage));
