import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminPage extends Component {
    render() {
        return (
            <div className='container'>
                <h1>AdminPage</h1>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState
})
export default connect(mapStateToProps)(AdminPage);