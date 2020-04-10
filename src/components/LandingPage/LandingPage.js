import React, { Component } from 'react';
import { connect } from 'react-redux';

class LandingPage extends Component {
    render() {
        return (
            <div className='container'>
                
                <h1>Test</h1>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState
  });
  
  export default connect(mapStateToProps)(LandingPage);