import React, { Component } from 'react';
import { connect } from 'react-redux';

class ContactPage extends Component {
    render() {
        return (
            <div className='container'>
                <h1>ContactPage</h1>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
  errors: reduxState.errors,
  reduxState
});
export default connect(mapStateToProps)(ContactPage);