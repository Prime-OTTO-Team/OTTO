import React, { Component } from 'react';
import { connect } from 'react-redux';

class TermsOfServicePage extends Component {
    render() {
        return (
            <div className='container'>
                <h1>Here's where the terms of service will show up.</h1>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState
});
export default connect(mapStateToProps)(TermsOfServicePage);