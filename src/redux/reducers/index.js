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
import userFavoritesReducer from './userFavoritesReducer';
import userInterestsReducer from './userInterestsReducer';
import editListingReducer from './editListingReducer';
import editModeReducer from './editModeReducer';
import propertyReducer from './propertyReducer';
import singlePropertyIdReducer from './singlePropertyIdReducer';
import zipReducer from './zipReducer';
import detailedPropertyReducer from './detailedPropertyReducer';

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
  userFavoritesReducer, //holds
  userInterestsReducer, 
  editListingReducer, //holds a listing that is to be edited in property inpute page
  editModeReducer, //establishes if the user is trying to edit on input property page
  propertyReducer, // holds results from get all properties
  singlePropertyIdReducer, // holds the property a user is interested in to display on offer page. 
  zipReducer, //holds zip search from landing page
  detailedPropertyReducer //holds all details of a property 
});

export default rootReducer;
