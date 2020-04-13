import React, {Component} from 'react';
import { connect } from 'react-redux';

class NdaPage extends Component {
    render() {
        return (
            <div className='container'>
                <h1>NdaPage</h1>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState
});
export default connect(mapStateToProps)(NdaPage);