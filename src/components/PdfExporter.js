
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import axios from 'axios';




class LoginContent extends Component {

  
    render() {
        const { classes } = this.props;
        return (
<p>hello</p>
        );
    }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
    errors: state.errors,
    user: state.user
});


export default connect(mapStateToProps)(withStyles(styles)(PdfExporter));