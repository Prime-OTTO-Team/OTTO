import React, { Component } from 'react';
import { connect } from 'react-redux';

class ContactPage extends Component {
    render() {
        return (
            <div className='container'>
                <h1>Otto provided by Market Fare</h1>
                <div>Contact us!</div>
                <div>Ralph: (651) 955 7697
                    <br /> Ralph@mktfare.com
                    <br /> Brian: (612) 578 7697
                    <br /> Brian@mktfare.com
                </div>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState
});
export default connect(mapStateToProps)(ContactPage);