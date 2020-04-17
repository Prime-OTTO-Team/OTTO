import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import loginModalReducer from './loginModalReducer';
import accountListing from './accountListingReducer';
import accountFavorite from './accountFavoriteReducer';
import searchResultReducer from './searchResultReducer';
import adminPropertyReducer from './adminPropertyReducer';
import adminUserReducer from './adminUserReducer';
import adminUnapprovedUserReducer from './adminUnapprovedUserReducer';
import adminPropertyHistoryReducer from './adminPropertyHistoryReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  loginModalReducer, //boolean, determines if the login/sign up modal should be shown
  accountListing, //holds a list of properties that a user has submitted
  accountFavorite, //holds the list of properties that a user has favorited
  searchResultReducer, //holds the search results to be displayed in ForSalePage
  adminPropertyReducer, //holds a list of all properties for the admin to look at
  adminUserReducer, //holds a list of all the users approved by the admin
  adminUnapprovedUserReducer, //holds a list of users not yet approved by admin
  adminPropertyHistoryReducer, //holds the history of all properties in the database
});

export default rootReducer;
