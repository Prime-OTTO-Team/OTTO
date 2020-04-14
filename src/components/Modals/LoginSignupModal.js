import React, { Component, forwardRef } from 'react';
// import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { connect } from 'react-redux';
import LogInContent from './LogInContent'
import SignUpContent from './SignUpContent';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import './LoginSignUpModal.css'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
class LoginSignUpModal extends Component {
    state = {
        switch: 'login'
    }
    isModalOpen = () => {
        return this.props.reduxState.loginModalReducer;
    }
    handleClose = () => {
        this.props.dispatch({
            type: 'LOGIN_REGISTER_MODAL_OPEN',
            payload: false
        });
    }
    //decides to render the login content or the register content 
    handleViewSwitch = (switchCase) => {
        this.setState({
            switch: switchCase
        })
    }
    view = () => {
        if (this.state.switch === 'login') {
            return <LogInContent handleClose={this.handleClose}/>
        } else {
            return <SignUpContent />
        }
    }
    loginSelected = () => {
        if (this.state.switch === 'login') {
            this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' })
            return true
        } else return false
    }
    signUpSelected = () => {
        if (this.state.switch === 'signUp') {
            this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' })
            return true
        } else return false
    }
    handleToggleChange = (value) => {
        console.log('value: ', value);
        this.setState({
            switch: value
        })
    }

    render() {
        return (
            <Dialog
                open={this.isModalOpen()}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => { this.handleClose() }}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <div className='dialogContainer'>
                    <div className="xButtonWrapper">

                        <Button className="xButton" onClick={() => { this.handleClose() }}>
                            X
                        </Button>
                    </div>
                    <DialogTitle id="alert-dialog-slide-title" />
                    <ToggleButtonGroup
                        className="toggleSwitch"
                        aria-label="text formatting"
                        onChange={(event, newValue) => {
                            this.setState({ switch: newValue[0] })
                        }
                        }
                    >
                        <ToggleButton
                            selected={this.loginSelected()}
                            value="login"
                            aria-label="bold"
                            onClick={console.log('login clicked')
                            }
                        >
                            Login
                        </ToggleButton>
                        <ToggleButton
                            selected={this.signUpSelected()}
                            value="signUp"
                        // onClick={this.setState({switch: 'signUp'})}
                        >
                            Sign Up
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <DialogContent>
                        {this.view()}
                    </DialogContent>
                </div>
            </Dialog>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState

})
export default connect(mapStateToProps)(LoginSignUpModal);