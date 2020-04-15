import React, { Component } from 'react';
import {connect} from 'react-redux';
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
import './LoginSignUpModal.css';

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

});

class SignupContent extends Component {
  state = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          phoneNumber: this.state.phoneNumber
        },
      });
    } else {
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Container className="loginModalContainer" component="main" maxWidth="xs">
        <div className={classes.paper}>
          {this.props.errors.registrationMessage && (
            <h2
              className="alert"
              role="alert"
            >
              {this.props.errors.registrationMessage}
            </h2>
          )}
          <form className={classes.form} noValidate onSubmit={this.registerUser}>
            <h1>Register User</h1>
            <div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email:"
                name="username"
                autoComplete="email"
                autoFocus
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoComplete="password"
                autoFocus
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="firstName"
                autoFocus
                value={this.state.firstName}
                onChange={this.handleInputChangeFor('firstName')}
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                autoFocus
                value={this.state.lastName}
                onChange={this.handleInputChangeFor('lastName')}
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                autoComplete="phoneNumber"
                autoFocus
                value={this.state.phoneNumber}
                onChange={this.handleInputChangeFor('phoneNumber')}
              />
            </div>
            <div>
              <Button variant="contained" color="primary"
                className={classes.submit}
                fullWidth
                variant="contained"
                type="submit"
                name="submit"
                value="Register"
              >
                Register
              </Button>

            </div>
          </form>
          {/* <center>
            <Button
              variant="contained" color="primary"
              type="button"
              className="link-button"
              onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
            >
              Login
          </Button>
          </center> */}
        </div>
      </Container>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = (reduxState) => ({
  errors: reduxState.errors,
  reduxState
});

export default connect(mapStateToProps)(withStyles(styles)(SignupContent));