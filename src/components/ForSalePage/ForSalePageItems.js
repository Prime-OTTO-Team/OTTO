import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { currencyFormatter } from '../Resources/currencyFormatter';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    details: {
        fontSize: theme.typography.pxToRem(13),
        flexBasis: '100%',
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
                console.log('status 200');
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
    }
    interestedInListing = async (propertyId) => {
        try {
            const response = await axios({
                url: 'api/interest',
                method: 'POST',
                params: {
                    propertyId: propertyId
                }
            })
            if (response.status === 200) {
                console.log('status 200');
                const interests = this.props.reduxState.userInterestsReducer;
                this.props.dispatch({
                    type: 'SET_INTERESTS',
                    payload: [...interests, propertyId]
                });
            }
            if (response.status === 400) {
                console.log('status 400');
            }
            console.log('response: ', response);
        } catch (error) {
            console.log('error : ', error)
        }
    }
    checkIfInterestButtonDisabled = (propertyId) => {
        const userInterests = this.props.reduxState.userInterestsReducer
        // console.log('disabledInterestButtons: ', userInterests);
        for (let i = 0; i < userInterests.length; i++) {
            const userInterest = userInterests[i];
            if (userInterest.property_id === propertyId) {
                return true;
            }
        }
        return false
    }
    checkIfFavoriteButtonDisabled = (propertyId) => {
        const userFavorites = this.props.reduxState.userFavoritesReducer
        // console.log('disabledFavoriteButtons: ', userFavorites);
        for (let i = 0; i < userFavorites.length; i++) {
            const userFavorite = userFavorites[i];
            if (userFavorite.property_id === propertyId) {
                return true;
            }
        }
        return false
    }


    renderListings = () => {
        const props = this.props;
        const { classes } = this.props;
        const properties = this.props.reduxState.searchResultReducer;
        console.log('props', props);
        if (properties) {
            return properties.map((property) => {
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
                            {console.log('checkIfFavoriteButtonDisabled: ', this.checkIfFavoriteButtonDisabled(property.id))
                            }
                            { this.checkIfFavoriteButtonDisabled(property.id) ? 
                            <FavoriteIcon 
                                className="interestedButton" variant="contained"
                                disabled={this.checkIfFavoriteButtonDisabled(property.id)}
                                onClick={() => { this.favoriteListing(property.id) }}
                             /> :
                             <FavoriteBorderIcon 
                                className="interestedButton" variant="rounded"
                                disabled={this.checkIfFavoriteButtonDisabled(property.id)}
                                onClick={() => { this.favoriteListing(property.id) }}
                             />
                            
                            
                            }

                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails
                            propertyType={property.property_type}
                            netOperatingIncome={property.net_operating_income}
                            grossIncome={property.gross_income}
                            grossExpense={property.gross_expense}

                        >
                        </ExpansionPanelDetails>
                        <div className="propertyButtonsWrapper">
                            <Button>
                                <Link
                                    className="interestedButton" variant="contained"
                                    to="/nda" 
                                    // onClick={() => { this.interestedInListing(property.id) }}
                                    disabled={this.checkIfInterestButtonDisabled(property.id)}
                                >
                                    Get More Information
                                </Link>
                            </Button>
                            {/* <Typography>
                                </Typography> */}
                        </div>
                    </ExpansionPanel>
                )
            })
        } else {
            console.log('Listings: cannot get property locations');
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
