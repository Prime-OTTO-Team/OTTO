import React from 'react';
import './Footer.css'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



const Footer = () => (
  <footer>
    <div className="nav-right">
    <Link className="nav-link" to="/about"> About </Link>
    <Link className="nav-link" to="/contact"> Contact Us </Link>
    <Link className="nav-link" to="/terms"> Terms and Conditions </Link>
    <Link className="nav-link" to="/home"> &copy; Mktfare 2020 </Link>
    </div>
  </footer>
);

export default Footer;