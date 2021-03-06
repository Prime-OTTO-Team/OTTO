import React, { Component } from 'react';
import './LandingPage.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from './ExpansionPanel/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import { currencyFormatter } from '../Resources/currencyFormatter';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const styles = theme => ({
    root: {
        width: '100%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flex: '33.33%',
        flexShrink: 0
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary
    },
    details: {
        fontSize: theme.typography.pxToRem(13),
        flex: '100%'
    }
});

class Listings extends Component {
    state = {
        buttonsDisabled: {
            interested: [],
            favorited: []
        }
    }
    favoriteListing = async (propertyId) => {
        try {
            const response = await axios({
                url: 'api/favorite',
                method: 'POST',
                params: {
                    propertyId: propertyId
                }
            })
            if (response.status === 200) {
                const favorited = this.props.reduxState.userFavoritesReducer;
                this.props.dispatch({
                    type: 'SET_FAVORITES',
                    payload: [...favorited, propertyId]
                });
            }
            if (response.status === 400) {
                console.log('status 400');
            }
            console.log('response: ', response);
        } catch (error) {
            console.log('error : ', error)
        }
    } // end of favoriteListing, this favorites a property for the user 
    interestedInListing = async (propertyId) => {
        this.props.dispatch(
            {
                type: 'SET_SINGLE_PROPERTY_ID',
                payload: propertyId
            }
        )
        this.props.dispatch(
            {
                type: 'SET_DETAILED_PROPERTY',
                payload: propertyId
            }
        )
    } //end of interestedInListing // This sets what a user is interested in
    checkIfInterestButtonDisabled = (propertyId) => {
        const userInterests = this.props.reduxState.userInterestsReducer
        for (let i = 0; i < userInterests.length; i++) {
            const userInterest = userInterests[i];
            if (userInterest.property_id === propertyId) {
                return true;
            }
        }
        return false
    } // end of checkIfInterestButtonDisabled, checks if the button works
    propertyIsFavorited = (propertyId) => {
        const userFavorites = this.props.reduxState.userFavoritesReducer
        for (let i = 0; i < userFavorites.length; i++) {
            const userFavorite = userFavorites[i];
            if (userFavorite.property_id === propertyId) {
                return true;
            }
        }
        return false
    } // end of propertyIsFavorited 
    renderListings = () => {
        const props = this.props;
        const { classes } = this.props;
        const properties = this.props.reduxState.propertyReducer;
        if (properties) {
            return properties.slice(0, 11).map((property) => {
                return (
                    <ExpansionPanel
                        key={property.id}
                        expanded={this.props.expanded === property.id}
                        onChange={() => {
                            this.props.handlePanelChange(property.id)
                        }}
                        className="expansionPanel"
                    >
                        <ExpansionPanelSummary
                            className="ExpansionPanelTitle"
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <div>
                                <Typography className={classes.heading}>{currencyFormatter(property.desired_price)}</Typography>
                                <Typography className={classes.secondaryHeading}>{property.city + ', ' + property.state + ' ' + property.zip_code}
                                </Typography>
                            </div>
                            <div>
                                {this.propertyIsFavorited(property.id) ?
                                    <FavoriteIcon
                                        className="interestedButton" variant="contained"
                                        disabled={this.propertyIsFavorited(property.id)}
                                        onClick={() => { this.favoriteListing(property.id) }}
                                    /> :
                                    <FavoriteBorderIcon
                                        className="interestedButton" variant="rounded"
                                        disabled={this.propertyIsFavorited(property.id)}
                                        onClick={() => { this.favoriteListing(property.id) }}
                                    />
                                }
                            </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails
                            propertyType={property.property_type}
                            netOperatingIncome={property.net_operating_income}
                            grossIncome={property.gross_income}
                            grossExpense={property.gross_expense}

                        >
                        </ExpansionPanelDetails>
                        <div className="propertyButtonsWrapper">
                            <Button className="moreInfoButton">
                                {this.props.reduxState.user.id ?
                                    <Link
                                        className="interestedButton" variant="contained"
                                        to="/nda"
                                        onClick={() => { this.interestedInListing(property.id) }}
                                        disabled={this.checkIfInterestButtonDisabled(property.id)}
                                    >
                                        Get More Information
                                    </Link>
                                    :
                                    <Link
                                        className="interestedButton" variant="contained"
                                        onClick={() => {
                                            props.dispatch({ type: 'LOGIN_REGISTER_MODAL_OPEN', payload: true })
                                        }}
                                    >
                                        Get More Information
                                </Link>
                                }
                            </Button>
                        </div>
                    </ExpansionPanel>
                )
            })
        } else {
        }
    }
    render() {
        return (
            <div className='listingContainer'>
                {this.renderListings()}
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState
})
export default connect(mapStateToProps)(withStyles(styles)(Listings));
