import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { currencyFormatter } from '../../Resources/currencyFormatter';
import './ExpansionPanel.css';

class ExpansionPanelDetails extends Component {
    render() {
        return (
            <List className="detailsContainer">
                <table className="detailsTable">
                    <tr>
                        {/* <ListItem> */}
                        <th>
                            <ListItemText className="listSubtitle">
                                Property Type
                            </ListItemText>
                        </th>
                        <th>
                            <ListItemText>
                                {this.props.propertyType}
                            </ListItemText>
                        </th>
                        {/* </ListItem> */}
                    </tr>
                </table>
                    <Divider light />
                <table  className="detailsTable">
                    <tr>
                        <th>
                            <ListItemText className="listSubtitle">
                                Net Operating Income
                            </ListItemText>
                        </th>
                        <th>
                            <ListItemText>
                                {currencyFormatter(this.props.netOperatingIncome)}
                            </ListItemText>
                        </th>
                    </tr>
                </table>
                <Divider light />


                <table  className="detailsTable">
                    <tr>
                        <th>
                            <ListItemText className="listSubtitle">
                            Gross Income
                            </ListItemText>
                        </th>
                        <th>
                            <ListItemText>
                                {currencyFormatter(this.props.grossIncome)}
                            </ListItemText>
                        </th>
                    </tr>
                </table>
                <Divider light />
                <table  className="detailsTable">
                    <tr>
                        <th>
                            <ListItemText className="listSubtitle">
                            Gross Expenses
                            </ListItemText>
                        </th>
                        <th>
                            <ListItemText>
                                {currencyFormatter(this.props.grossExpense)}
                            </ListItemText>
                        </th>
                    </tr>
                </table>
            </List>
        )
    }
}
export default ExpansionPanelDetails;