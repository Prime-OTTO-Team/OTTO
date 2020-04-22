import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
// import Footer from '../Footer/Footer';
// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
// import UserPage from '../UserPage/UserPage';
import AccountPage from '../AccountPage/AccountPage';
import AdminPropertyPage from '../AdminPropertyPage/AdminPropertyPage';
import AdminUserPage from '../AdminUserPage/AdminUserPage';
import ContactPage from '../ContactPage/ContactPage';
import ForSalePage from '../ForSalePage/ForSalePage'
import LandingPage from '../LandingPage/LandingPage';
import NdaPage from '../NdaPage/NdaPage';
import TermsOfServicePage from '../TermsOfServicePage/TermsOfServicePage';
import PropertyInputPage from '../PropertyInputPage/PropertyInputPage'
import './App.css';
import NewFooter from '../NewFooter/NewFooter';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}

            <Route exact path="/contact"component={ContactPage}/>
            <Route exact path="/about"component={AboutPage}/>
            <Route exact path="/nda"component={NdaPage}/>
            <Route exact path="/terms"component={TermsOfServicePage}/>
            <Route exact path="/account"component={AccountPage}/>
            <Route exact path="/admin/property" component = {AdminPropertyPage}/>
            <Route exact path="/admin/user" component = {AdminUserPage}/>

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <Route
              exact
              path="/home"
              component={LandingPage}
            />
            <Route
              exact
              path="/propertyInputPage"
              component={PropertyInputPage}
            />
            <Route
              exact
              path="/forSale"
              component={ForSalePage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            {/* <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            /> */}
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <NewFooter />
        </div>
      </Router>
    )
  }
}

export default connect()(App);
