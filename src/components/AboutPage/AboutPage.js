import React, { Component } from 'react';
import { connect } from 'react-redux';

class AboutPage extends Component {
    render() {
        return (
            <div className='container'>
                <h1>Otto is an owner to owner commericial real estate marketplace!</h1>
                <br />
                <div>Otto provides annonymity to thier clients and allows them to place commericial real estate listings off market.
                </div>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState
});
export default connect(mapStateToProps)(AboutPage);
