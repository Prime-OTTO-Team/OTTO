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
import LoginContent from './LoginContent';
import SignUpContent from './SignUpContent';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
class LoginSignUpModal extends Component {
    state = {
        switch: 'login'
    }
    isModalOpen = () => {
        console.log('isModalOpen: loginModalReducer = ', this.props.reduxState.loginModalReducer);
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
    render() {
        return (
            <div className='container'>
                <h1> Modal Test</h1>
                {/* <Modal
                    open={() => {this.isModalOpen()}}
                    onClose={() => {this.handleClose()}}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    modal test
                     <div className="switchHeader">
                        <button onClick={() => {this.handleViewSwitch('login')}}>
                            Login
                        </button>
                        <button>
                            Sign Up
                        </button>
                    </div>
                    <div className='modalContent'>
                        modal content
                    </div>
                </Modal> */}
                <Dialog
                    open={this.isModalOpen()}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={()=>{this.handleClose()}}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                        {/* <DialogContentText id="alert-dialog-slide-description">
                            Let Google help apps determine location. This means sending anonymous location data to
                            Google, even when no apps are running.
                        </DialogContentText> */}
                        {/* <LoginContent/> */}
                        <SignUpContent/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => { this.handleClose() }} color="primary">
                            Disagree
                        </Button>
                        <Button onClick={() => { this.handleClose() }} color="primary">
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState
   
})
export default connect(mapStateToProps)(LoginSignUpModal);

