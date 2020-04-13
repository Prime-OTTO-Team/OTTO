import React from 'react';
import './Footer.css'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



const Footer = () => (
  <footer>
    &copy; Mktfare
    <div className="nav-right">
    <Link className="nav-link" to="/about"> About </Link>
    <Link className="nav-link" to="/contact"> Contact Us </Link>
    <Link className="nav-link" to="/terms"> Terms and Conditions </Link>
    </div>
  </footer>
);

export default Footer;