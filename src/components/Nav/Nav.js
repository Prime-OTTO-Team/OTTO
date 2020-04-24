import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">OTTO</h2>
      </Link>
      <div className="nav-right">
        <Link className="nav-link" to="/admin/property">Admin Properties</Link>
        <Link className="nav-link" to="/admin/user">Admin Users</Link>
        {/* Show the link to the For Sale/ Add Listing/ Account Page and the Log Out if the user is logged in */}
        {!props.user.id && (
          <Link className="nav-link" to="/home"
            onClick={() => {
              console.log('login clicked');
              props.dispatch({ type: 'LOGIN_REGISTER_MODAL_OPEN', payload: true })
            }}
          >
            {'Login / Register'}
          </Link>
        )}
        {props.user.id && (
          <>
            <Link className="nav-link" to="/ForSalePage">
              For Sale
          </Link>
            <Link className="nav-link" to="/PropertyInputPage">
              Add Listing
          </Link>
            <Link className="nav-link" to="/account">
              Account Page
          </Link>
            <LogOutButton className="nav-link" />
          </>
        )}
        {/* Always show this link since the about page is not protected */}
        {/* <Link className="nav-link" to="/LandingPage">
        Initial Home Page
      </Link> */}
      </div>
    </div>
  )

};



// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = reduxState => ({
  user: reduxState.user,
  reduxState
});
export default connect(mapStateToProps)(Nav);
