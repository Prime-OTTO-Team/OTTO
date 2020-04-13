import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';

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
    
    render() {
        return (
            <div className='container'>
                <h1>Test</h1>
                <Modal
                    // open={open}
                    onClose={() => {this.handleClose()}}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
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
                </Modal>
            </div>
        )
    }
}
export default LoginSignUpModal
    ;