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
            return <LogInContent/>
        } else {
            return <SignUpContent/>
        }
    }
    loginSelected = () => {
        if (this.state.switch === 'login') {
            return true
        } else return false
    }
    signUpSelected = () => {
        if (this.state.switch === 'signUp') {
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
                    className='container'
                    open={this.isModalOpen()}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={()=>{this.handleClose()}}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title"/>
                    <ToggleButtonGroup 
                    className="toggleSwitch" 
                    aria-label="text formatting"
                    onChange={(event, newValue) => {
                        this.setState({switch: newValue[0]})}
                    }
                    >
                        <ToggleButton 
                            selected={this.loginSelected()}
                            value="login"
                            aria-label="bold"
                            // onClick={this.setState({switch: 'login'})}
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
                    <DialogActions>
                        <Button onClick={() => { this.handleClose() }} color="primary">
                            Disagree
                        </Button>
                    </DialogActions>
                </Dialog>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState
   
})
export default connect(mapStateToProps)(LoginSignUpModal);