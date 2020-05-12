import React, { Component, forwardRef } from 'react';
// import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { connect } from 'react-redux';
import LoginContent from './LoginContent'
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
    }// end of isModalOpen
    handleClose = () => {
        this.props.dispatch({
            type: 'LOGIN_REGISTER_MODAL_OPEN',
            payload: false
        });
    }//end of handleClose decides to render the login content or the register content 

    handleViewSwitch = (switchCase) => {
        this.setState({
            switch: switchCase
        })
    }// end of handleViewSwitch
    view = () => {
        if (this.state.switch === 'login') {
            return <LoginContent handleClose={this.handleClose}/>
        } else {
            return <SignUpContent />
        }
    } // end of view
    loginSelected = () => {
        if (this.state.switch === 'login') {
            this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' })
            return true
        } else return false
    } // end of loginSelected
    signUpSelected = () => {
        if (this.state.switch === 'signUp') {
            this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' })
            return true
        } else return false
    }// end of signUpSelected
    handleToggleChange = (value) => {
        this.setState({
            switch: value
        })
    }// end of handleToggleChange 
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
                        }}
                    >
                        <ToggleButton
                            selected={this.loginSelected()}
                            value="login"
                            aria-label="bold"
                        >
                            Login
                        </ToggleButton>
                        <ToggleButton
                            selected={this.signUpSelected()}
                            value="signUp"
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