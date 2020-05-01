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
import PropertyPage from '../PropertyPage/PropertyPage';
import './App.css';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import NewFooter from '../NewFooter/NewFooter';
import PdfExporter from '../PdfExporter';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


//After adding (MuiThemeProvider, createMuiTheme) to the top of the component, 
//we can set up the primary and secondery colors for Material UI over here.
//We have to wrap the rest of the components inside the App.js with:  
//<MuiThemeProvider theme={theme}></MuiThemeProvider> like line 61 to 105,
//to have the same colors in all those components between, 
//otherwise we have to do this individually in any component which is using Material UI colors 
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
  }

  render() {
    return (

      <Router>
        <ScrollToTop/>
        <div>
          <MuiThemeProvider theme={theme}>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            
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
              <Route exact path="/pdfExport" component={PdfExporter} />
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
          </MuiThemeProvider>
        </div>
      </Router>
    )
  }
}

export default connect()(App);
