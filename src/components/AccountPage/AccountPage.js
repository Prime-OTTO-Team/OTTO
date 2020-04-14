import React, {Component} from 'react';
import { connect } from 'react-redux';

class AccountPage extends Component {
    state = { 
        listing = TRUE
    }

    handleClick = () => {
        this.state.listing = TRUE
    }
    
    handleClick2 = () => {
        this.state.listing = FALSE
    }

    render() {
        return (
            <div className='container'>
                <h1>AccountPage</h1>
                <button onClick={this.handleClick}>My Listings</button> 
                <button onClick={this.handleClick2}>My Favorites</button>
            <div classname='listings'> 
            Here is where listings go.
            {this.state.listing ? (<p>listings</p>):(<p>favorites</p>)}
            </div>


            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState
});
export default connect(mapStateToProps)(AccountPage);