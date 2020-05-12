import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import Logo from './logo_with_text.png';

const Nav = (props) => (
  <div className="nav">
    <Link to="/home">
      <img className='logo' src={Logo} height='55px' />
    </Link>
    <div className="nav-right">
      {props.user.user_type === 1 && 
      <>
      <Link className="nav-link" to="/admin/property">Admin Properties</Link>
      <Link className="nav-link" to="/admin/user">Admin Users</Link>
      </>
      }
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
        </>
      )}
      <Link className="nav-link" to="/home"
        onClick={() => {
          console.log('login clicked');
          props.dispatch({ type: 'LOGIN_REGISTER_MODAL_OPEN', payload: true })
        }}
      >
        {props.user.id ? <LogOutButton className="" /> : 'Login / Register'}
      </Link>
    </div>
  </div>
);
const mapStateToProps = reduxState => ({
  user: reduxState.user,
  reduxState
});
export default connect(mapStateToProps)(Nav);
