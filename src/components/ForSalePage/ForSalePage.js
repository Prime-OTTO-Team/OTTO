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
        margin: theme.spacing(1),
        width: '100%',
        marginTop: theme.spacing(-1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        margin: theme.spacing(1),
        width: '100%',
        marginTop: theme.spacing(-1)
    }
});
let zipArray = [];
let propertyTypeArray = [];
let noiArray = [];
let priceArray = [];
class ForSalePage extends Component {
    state = {
        search: {
            zip_code: '',
            property_type: '',
            net_operating_income_low: '',
            net_operating_income_high: '',
            desired_price_low: '',
            desired_price_high: '',

        }
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            search: {
                ...this.state.search,
                [propertyName]: event.target.value
            }
        })
    }
    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
        console.log('logging search state', this.state);

    }
    search = (event) => {
        event.preventDefault();
        console.log('logging search array frm search function', propertyTypeArray);
        this.props.dispatch({
            type: 'SEARCH_PROPERTY_TYPE',
            payload: this.state.search,
        });


    }

    handleSelect = (propertyName) => (event) => {

        console.log('logging event target value', event.target.value);
        this.setState.propertyName({ propertyName: event.target.value });
    }

    render() {
        const { classes } = this.props;

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Typography component="h1" variant="h5">
                    Property Search
                    </Typography>
                <div className={classes.paper}>
                    <form className={classes.form} noValidate onSubmit={this.search}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControl className={classes.form}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="zip_code"
                                        label="Zip Code"
                                        name="zip_code"
                                        autoComplete="zip_code"
                                        autoFocus
                                        value={this.state.zip_code}
                                        onChange={(event) => this.handleChangeFor('zip_code', event)}
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <FormControl className={classes.form}>
                                    <InputLabel >Property Type</InputLabel>
                                    <Select
                                        id="propertyTypeArray"
                                        type="property_type"
                                        fullWidth
                                        name="property_type"
                                        value={this.state.property_type}
                                        onChange={(event) => this.handleChangeFor('property_type', event)}
                                    >
                                        <MenuItem value={'Residential'}>Residential </MenuItem>
                                        <MenuItem value={'Commercial'}>Commerical</MenuItem>
                                        <MenuItem value={'Raw'}>Raw Land</MenuItem>
                                        <MenuItem value={'Vacant'}>Vacant</MenuItem>
                                    </Select>
                                    <FormHelperText>Please Select</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel >NOI Floor</InputLabel>
                                    <Select
                                        id="net_operating_income_low"
                                        type="net_operating_income_low"
                                        name="Net Operating Income"
                                        value={this.state.NOI}
                                        onChange={(event) => this.handleChangeFor('net_operating_income_low', event)}
                                    >
                                        <MenuItem value="" disabled>
                                            Select Low End
                                        </MenuItem>
                                        <MenuItem value={'0'}>$0 </MenuItem>
                                        <MenuItem value={'250000'}>$250,000</MenuItem>
                                        <MenuItem value={'500000'}>$500,000</MenuItem>
                                        <MenuItem value={'750000'}>$750,000</MenuItem>
                                        <MenuItem value={'1000000'}>$1,000,000</MenuItem>
                                    </Select>
                                    <FormHelperText>Please Select</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel >NOI Limit</InputLabel>
                                    <Select
                                        id="net_operating_income_high"
                                        type="net_operating_income_high"
                                        name="Net Operating Income"
                                        value={this.state.NOI}
                                        onChange={(event) => this.handleChangeFor('net_operating_income_high', event)}
                                    >
                                        <MenuItem value="" disabled>
                                            Select High End
                                        </MenuItem>
                                        <MenuItem value={'250000'}>$250,000</MenuItem>
                                        <MenuItem value={'500000'}>$500,000</MenuItem>
                                        <MenuItem value={'750000'}>$750,000</MenuItem>
                                        <MenuItem value={'1000000'}>$1,000,000</MenuItem>
                                        <MenuItem value={'1500000'}>$1,500,000</MenuItem>
                                        <MenuItem value={'2000000'}>$2,000,000</MenuItem>
                                        <MenuItem value={'2500000'}>$2,500,000</MenuItem>
                                        <MenuItem value={'3000000'}>$3,000,000</MenuItem>
                                        <MenuItem value={'4000000'}>$4,000,000</MenuItem>
                                        <MenuItem value={'5000000'}>$5,000,000</MenuItem>
                                    </Select>
                                    <FormHelperText>Please Select</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid xs={6} sm={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel>Price Floor</InputLabel>
                                    <Select

                                        id="desired_price_low"
                                        name="desired_price_low"
                                        type="desired_price_low"
                                        value={this.state.desired_price}
                                        onChange={(event) => this.handleChangeFor('desired_price_low', event)}
                                    >
                                        <MenuItem value="" disabled>
                                            Select Low End
                                        </MenuItem>
                                        <MenuItem value={'0'}>$0 </MenuItem>
                                        <MenuItem value={'250000'}>$250,000</MenuItem>
                                        <MenuItem value={'500000'}>$500,000</MenuItem>
                                        <MenuItem value={'750000'}>$750,000</MenuItem>
                                        <MenuItem value={'1000000'}>$1,000,000</MenuItem>
                                        <MenuItem value={'1500000'}>$1,500,000</MenuItem>
                                        <MenuItem value={'2000000'}>$2,000,000</MenuItem>
                                        <MenuItem value={'2500000'}>$2,500,000</MenuItem>
                                        <MenuItem value={'3000000'}>$3,000,000</MenuItem>
                                        <MenuItem value={'4000000'}>$4,000,000</MenuItem>
                                        <MenuItem value={'5000000'}>$5,000,000</MenuItem>

                                    </Select>
                                    <FormHelperText>Please Select</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid xs={6} sm={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel>Price Limit</InputLabel>
                                    <Select

                                        id="desired_price_high"
                                        name="desired_price_high"
                                        type="desired_price_high"
                                        value={this.state.desired_price}
                                        onChange={(event) => this.handleChangeFor('desired_price_high', event)}
                                    >
                                        <MenuItem value="" disabled>
                                            Select High End
                                        </MenuItem>
                                        <MenuItem value={'250000'}>$250,000</MenuItem>
                                        <MenuItem value={'500000'}>$500,000</MenuItem>
                                        <MenuItem value={'750000'}>$750,000</MenuItem>
                                        <MenuItem value={'1000000'}>$1,000,000</MenuItem>
                                        <MenuItem value={'1500000'}>$1,500,000</MenuItem>
                                        <MenuItem value={'2000000'}>$2,000,000</MenuItem>
                                        <MenuItem value={'2500000'}>$2,500,000</MenuItem>
                                        <MenuItem value={'3000000'}>$3,000,000</MenuItem>
                                        <MenuItem value={'4000000'}>$4,000,000</MenuItem>
                                        <MenuItem value={'5000000'}>$5,000,000</MenuItem>
                                        <MenuItem value={'6000000'}>$6,000,000</MenuItem>
                                        <MenuItem value={'7000000'}>$7,000,000</MenuItem>
                                        <MenuItem value={'8000000'}>$8,000,000</MenuItem>
                                        <MenuItem value={'9000000'}>$9,000,000</MenuItem>
                                        <MenuItem value={'10000000'}>$10,000,000</MenuItem>
                                    </Select>
                                    <FormHelperText>Please Select</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl className={classes.form}>
                                    <Button variant="contained" color="primary"
                                        className={classes.submit}
                                        variant="contained"
                                        fullWidth
                                        type="submit"
                                        name="submit"
                                        value="Search"
                                    >
                                        Search
                                        </Button>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <h1>{this.displayArray}</h1>

            </Container>
        )
    }
}
const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect(mapStateToProps)(withStyles(styles)(ForSalePage));