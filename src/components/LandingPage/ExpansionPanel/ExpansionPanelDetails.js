import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { currencyFormatter } from '../../Resources/currencyFormatter';

class ExpansionPanelDetails extends Component {
    render() {
        return (
            <List className="detailsContainer">
                <ListItem>
                    <ListItemText className="listSubtitle">
                        Property Type
                        </ListItemText>
                    <ListItemText>
                        {this.props.propertyType}
                    </ListItemText>
                </ListItem>
                <Divider light />
                <ListItem>
                    <ListItemText className="listSubtitle">
                        Net Operating Income
                        </ListItemText>
                    <ListItemText>
                        {currencyFormatter(this.props.netOperatingIncome)}
                    </ListItemText>
                </ListItem>
                <Divider light />
                
                <ListItem>
                    <ListItemText className="listSubtitle">
                        Gross Income
                        </ListItemText>
                    <ListItemText>
                        {currencyFormatter(this.props.grossIncome)}
                    </ListItemText>
                </ListItem>
                <Divider light />
                <ListItem>
                    <ListItemText className="listSubtitle">
                        Gross Expenses
                        </ListItemText>
                    <ListItemText>
                        {currencyFormatter(this.props.grossExpense)}
                    </ListItemText>
                </ListItem>
            </List>
        )
    }
}
export default ExpansionPanelDetails;