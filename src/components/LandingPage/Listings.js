import React, { Component } from 'react';
import './LandingPage.css';
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
                const favorited =  this.props.reduxState.userFavoritesReducer;
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
        // this.props.history.push('/');
        this.props.dispatch({
            type: 'SET_SINGLE_PROPERTY_ID',
            payload: propertyId
        })
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
                const interests =  this.props.reduxState.userInterestsReducer;
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
        const properties = this.props.reduxState.propertyReducer;
        console.log('props', props);
        if (properties) {
            return properties.map((property) => {
                return (
                    <ExpansionPanel
                        key={property.id}
                        expanded={this.props.expanded === property.id}
                        onChange={() => {
                            this.props.handlePanelChange(property.id)
                        }}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>{'$' + property.desired_price}</Typography>
                            <Typography className={classes.secondaryHeading}>{property.city + ', ' + property.state + ' ' + property.zip_code}
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails >
                            <Typography className={classes.details}>
                                Property Type
                                <br />
                                {property.property_type}
                                <Divider />
                                Net Operating Income
                                <br />
                                {property.net_operating_income}
                                <Divider />
                                Gross Income
                                <br />
                                {property.gross_income}
                                <Divider />
                                Gross Expenses
                                <br />
                                {property.gross_expense}
                            </Typography>
                        </ExpansionPanelDetails>
                        <div className="propertyButtonsWrapper">
                            <Button
                                className="interestedButton" variant="contained"
                                color="primary"
                                disabled={this.checkIfFavoriteButtonDisabled(property.id)}
                                onClick={() => { this.favoriteListing(property.id) }}
                            >Favorite
                            </Button>
                            <Button
                                className="interestedButton" variant="contained"
                                color="primary"
                                disabled={this.checkIfInterestButtonDisabled(property.id)}
                                onClick={() => { this.interestedInListing(property.id) }}
                            >I'm Interested
                            </Button>
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
