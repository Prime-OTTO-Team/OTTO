import React, { Component } from 'react';
import './LandingPage.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

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

    }


    renderListings = () => {
        const props = this.props;
        const { classes } = this.props;
        console.log('props', props);
        if (props.properties) {
            return props.properties.map((property) => {
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
                                <br/>
                                {property.property_type}
                                <Divider/>
                                Net Operating Income
                                <br/>
                                {property.net_operating_income}
                                <Divider/>
                                Gross Income
                                <br/>
                                {property.gross_income}
                                <Divider/>
                                Gross Expenses
                                <br/>
                                {property.gross_expense}
                            </Typography>
                        </ExpansionPanelDetails>
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
export default withStyles(styles)(Listings);
