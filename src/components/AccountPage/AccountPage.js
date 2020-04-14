import React, {Component} from 'react';
import { connect } from 'react-redux';

class AccountPage extends Component {
    state = { 
        status: true
    }

    handleClick = () => {
        if(this.state.status === true){
        this.setState({
            listing: false
        })
    }
    else{
        this.setState({
            listing: true
        })
    }
}


    render() {
        return (
            <div className='container'>
                <h1>AccountPage</h1>
                <button onClick={this.handleClick}>My Listings</button> 
                <button onClick={this.handleClick}>My Favorites</button>
            <div classname='listing'> 
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