import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
import AboutPage from '../AboutPage/AboutPage';
import AccountPage from '../AccountPage/AccountPage';
import AdminPropertyPage from '../AdminPropertyPage/AdminPropertyPage';
import AdminUserPage from '../AdminUserPage/AdminUserPage';
import ContactPage from '../ContactPage/ContactPage';
import ForSalePage from '../ForSalePage/ForSalePage'
import LandingPage from '../LandingPage/LandingPage';
import NdaPage from '../NdaPage/NdaPage';
import TermsOfServicePage from '../TermsOfServicePage/TermsOfServicePage';
import PropertyInputPage from '../PropertyInputPage/PropertyInputPage'
import PropertyPage from '../PropertyPage/PropertyPage';
import './App.css';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Footer from '../NewFooter/NewFooter';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#BE191D'
    },
    primary: {
      main: '#0087CB'
    }
  },
});

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }//end componentDidMount
  render() {
    return (
      <Router>
        <ScrollToTop/>
        <div>
          <MuiThemeProvider theme={theme}>
          <Nav />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/contact"component={ContactPage}/>
            <Route exact path="/about"component={AboutPage}/>
            <Route exact path="/nda"component={NdaPage}/>
            <Route exact path="/ForSalePage"component={ForSalePage}/>
            <Route exact path="/TOS"component={TermsOfServicePage}/>
            <Route exact path="/account"component={AccountPage}/>
            <Route exact path="/admin/property" component = {AdminPropertyPage}/>
            <Route exact path="/admin/user" component = {AdminUserPage}/>
            <Route exact path="/privacy" component = {PrivacyPolicy}/>
            <Route exact path="/property" component = {PropertyPage}/>
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
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
          </MuiThemeProvider>
        </div>
      </Router>
    )
  }
}

export default connect()(App);
