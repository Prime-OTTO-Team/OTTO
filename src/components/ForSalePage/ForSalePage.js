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
let searchArray = [];
const initalState = {};
class ForSalePage extends Component {

    state = '';

    search = (event) => {
        event.preventDefault();

        this.props.dispatch({
            type: 'SEARCH_PROPERTY',
            payload: searchArray,
        });
    } // end registerUser

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
        console.log('logging search state', this.state);

    }
    arrayLoader = () => {
        {
            this.state && (
                searchArray.push(this.state.searchQuery)
            )
        }
        console.log('logging search array', searchArray);
    }

    handleSelect = propertyName => (event) => {
        event.preventDefault();
        console.log('logging event target value', event.target.value);
        this.setState({
            searchQuery: { [propertyName]: event.target.value },
        });
        console.log('logging handle select', this.state);
        this.arrayLoader();    
    }

   
    render() {
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Alumni Information
                    </Typography>

                    <form className={classes.form} noValidate onSubmit={this.search}>
                        <Grid container spacing={2}>
                            <div>
                                <Grid item xs={12} sm={6}>
                                    <FormControl className={classes.formControl}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="zipCode"
                                            label="Zip Code"
                                            name="zipCode"
                                            autoComplete="zipCode"
                                            autoFocus
                                            value={this.state.zipCode}
                                            onChange={this.handleInputChangeFor('zipCode')}
                                        />
                                    </FormControl>
                                </Grid>
                            </div>
                            <Grid item xs={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel >Property Type</InputLabel>
                                    <Select
                                        id="propertyType"
                                        type="propertyType"
                                        name="propertyType"
                                        value={this.state.propertyType}
                                        onChange={this.handleSelect('propertyType')}
                                    >
                                        <MenuItem value={'Residential'}>Residential </MenuItem>
                                        <MenuItem value={'Commerical'}>Commerical</MenuItem>
                                        <MenuItem value={'Raw'}>Raw Land</MenuItem>
                                        <MenuItem value={'Vacant'}>Vacant</MenuItem>
                                    </Select>
                                    <FormHelperText>Please Select</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} >
                                <FormControl className={classes.formControl}>
                                    <InputLabel >Net Operating Income</InputLabel>
                                    <Select
                                        id="NOI"
                                        type="NOI"
                                        name="Net Operating Income"
                                        value={this.state.NOI}
                                        onChange={this.handleSelect('NOI')}
                                    >
                                        <MenuItem value="" disabled>
                                            Select NOI
                                        </MenuItem>
                                        <MenuItem value={'0-250,000'}>$0 - $250,000</MenuItem>
                                        <MenuItem value={'250,000-500,000'}>$250,000 - $500,000</MenuItem>
                                        <MenuItem value={'500,000-750,000'}>$500,000 - $750,000</MenuItem>
                                        <MenuItem value={'750,000-1,000,000'}>$750,000 - $1,000,000</MenuItem>
                                    </Select>
                                    <FormHelperText>Please Select</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} >
                                <FormControl className={classes.formControl}>
                                    <InputLabel>Listing Price </InputLabel>
                                    <Select

                                        id="price"
                                        name="price"
                                        value={this.state.price}
                                        onChange={this.handleSelect('price')}
                                    >
                                        <MenuItem value="" disabled>
                                            Select Price Range
                                        </MenuItem>
                                        <MenuItem value={'0-250,000'}>$0-$250,000</MenuItem>
                                        <MenuItem value={'250,000-500,000'}>$250,000-500,000</MenuItem>
                                        <MenuItem value={'500,000-750,000'}>$500,000-750,000</MenuItem>
                                        <MenuItem value={'750,000-1,000,000'}>$750,000-1,000,000</MenuItem>
                                        <MenuItem value={'1,000,000-1,500,000'}>$1,000,000-$1,500,000</MenuItem>
                                        <MenuItem value={'1,500,000-2,000,000'}>$1,500,000-$2,000,000</MenuItem>
                                        <MenuItem value={'2,000,000-2,500,000'}>$2,000,000-$2,500,000</MenuItem>
                                        <MenuItem value={'2,500,000-3,000,000'}>$2,500,000-$3,000,000</MenuItem>
                                        <MenuItem value={'3,000,000-4,000,000'}>$3,000,000-$4,000,000</MenuItem>
                                        <MenuItem value={'4,000,000-5,000,000'}>$4,000,000-$5,000,000</MenuItem>
                                        <MenuItem value={'5,000,000-6,000,000'}>$5,000,000-$6,000,000</MenuItem>
                                        <MenuItem value={'6,000,000-7,000,000'}>$6,000,000-$7,000,000</MenuItem>
                                        <MenuItem value={'7,000,000-8,000,000'}>$7,000,000-$8,000,000</MenuItem>
                                        <MenuItem value={'8,000,000-9,000,000'}>$8,000,000-$9,000,000</MenuItem>
                                        <MenuItem value={'9,000,000-10,000,000'}>$9,000,000-$10,000,000</MenuItem>
                                        <MenuItem value={'10,000,000-10,000,000+'}>$10,000,000-$10,000,000+</MenuItem>

                                    </Select>
                                    <FormHelperText>Please Select</FormHelperText>
                                </FormControl>
                            </Grid>
                            <div>
                                <Grid item xs={12} sm={6}>
                                    <FormControl className={classes.formControl}>
                                        <Button variant="contained" color="primary"
                                            className={classes.submit}
                                            variant="contained"
                                            type="submit"
                                            name="submit"
                                            value="Search"
                                        >
                                            Search
              </Button>
                                    </FormControl>
                                </Grid>
                            </div>
                        </Grid>
                    </form>
                    <h1>{this.displayArray}</h1>
                </div>
            </Container>
        )
    }
}
const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect(mapStateToProps)(withStyles(styles)(ForSalePage));