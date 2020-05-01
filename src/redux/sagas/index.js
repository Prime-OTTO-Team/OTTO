import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import accountSaga from './accountSaga';
import searchSaga from './searchSaga';
import adminPropertySaga from './adminPropertySaga';
import adminUserSaga from './adminUserSaga';
import propertySaga from './propertySaga';
import emailSaga from './emailSaga';
import ndaSaga from './ndaSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    accountSaga(),
    searchSaga(),
    adminUserSaga(),
    adminPropertySaga(),
    propertySaga(),
    emailSaga(),
    ndaSaga()
  ]);
}
