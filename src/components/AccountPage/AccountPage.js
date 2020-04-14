import React, { Component } from 'react';
import { connect } from 'react-redux';

class AccountPage extends Component {
    render() {
        return (
            <div className='container'>
                <h1>AccountPage</h1>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState
});
export default connect(mapStateToProps)(AccountPage);