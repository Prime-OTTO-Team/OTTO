import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import LoginSignUpModal from '../Modals/LoginSignupModal';
import GoogleMap from '../GoogleMaps/GoogleMap';
import Listings from './Listings';
import './LandingPage.css';
import Banner from './skyline.jpg';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { white } from 'material-ui/styles/colors';



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
        marginTop: theme.spacing(-1),
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",

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

class LandingPage extends Component {
    //TODO: set local state "properties" to a redux reducer
    state = {
        search: {
            zip_code: '',
        },
        filteredProperties: [],
        unfilteredProperties: [],
        properties: '',
        expanded: 0

    }
    componentDidMount() {
        this.getProperties();
    }
    getProperties = async () => {
        try {
            const response = await axios({
                url: 'api/property/public',
                method: 'GET'
            })
            this.setState({
                properties: response.data
            })
            this.props.dispatch({
                type: 'SET_PROPERTY',
                payload: response.data
            })
            console.log('this.state.properties', this.state.properties);
        } catch (error) {
            console.log('getProperties error: ', error)
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
    searchZip = (event) => {
        event.preventDefault();
        console.log('logging zip from landing page', this.state.search);
        this.props.dispatch ({
            type: 'SET_ZIP_SEARCH',
            payload: this.state.search.zip_code
        })
        this.props.history.push('/ForSalePage');
    }

    handlePanelChange = (id) => {
        if (id != this.state.expanded) {
            this.setState({
                expanded: id
            })
        } else {
            this.setState({
                expanded: 0
            })
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className='conatiner'>
                    <img className='banner' src={Banner} />
                    <div className='searchBar'>
                        <form className={classes.form} noValidate onSubmit={this.searchZip}>
                            <FormControl className={classes.form}>
                                <TextField className='searchField'
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="zip_code"
                                    label="Zip Code"
                                    name="zip_code"
                                    autoComplete="zip_code"
                                    autoFocus
                                    // value={this.state.search.zip_code}
                                    onChange={(event) => this.handleChangeFor('zip_code', event)}
                                />
                            </FormControl>
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

                        </form>
                    </div>
                </div>
                <LoginSignUpModal />

                <div className="mapListingContainer">
                    <Listings
                        properties={this.state.properties}
                        handlePanelChange={this.handlePanelChange}
                        expanded={this.state.expanded}
                    />
                    <div className="mapContainer">
                        <GoogleMap markerLocations={this.state.properties}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState
});

export default connect(mapStateToProps)(withStyles(styles)(LandingPage));