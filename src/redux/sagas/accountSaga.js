import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* deleteAccountFavorite(action) {
    try{
        let objectToSend = action.payload.id;
        yield axios.delete(`/api/account/interest/${objectToSend}`)
        yield put({
            type: 'FETCH_ACCOUNT',
            payload: action.payload.user_id
        })
    } catch (error) {
        console.log(error);
    }
}
// This is used to delete favorites form an account 

function* updateAccountListing(action) {
    try{
        let objectToSend = action.payload.id;
        yield axios.put(`/api/account/property/${objectToSend}`)
        yield put({
            type: 'FETCH_ACCOUNT',
            payload: action.payload.user_id
        })
    } catch (error) {
        console.log(error);
    }
}
// This removes a users listing and pushes it into the history

function* fetchAccountListing(action) {
    try {
        const accountResponse = yield axios.get(`/api/account/property`)
        yield put({
            type: 'SET_ACCOUNT_LISTING',
            payload: accountResponse.data
        })
    } catch (error) {
        console.log(error);
    }
}
// This fetches all the listings within your account.

function* fetchAccountFavorite(action) {
    try {
        console.log('from sagas fetchAccountFavorite');
        const accountResponse = yield axios.get(`/api/account/favorite`)
        yield put({
            type: 'SET_ACCOUNT_FAVORITE',
            payload: accountResponse.data
        })
    } catch (error) {
        console.log(error);
    }
}
//This fetches all the favorites for an account 

function* fetchAccountInterest(action) {
    try {
        const accountResponse = yield axios.get(`/api/account/interest`)
        yield put({
            type: 'SET_INTERESTS',
            payload: accountResponse.data
        })
    } catch (error) {
        console.log(error);
    }
}
//

function* accountSaga() {
    yield takeEvery('FETCH_ACCOUNT', fetchAccountListing);
    yield takeEvery('FETCH_ACCOUNT', fetchAccountFavorite);
    yield takeEvery('FETCH_ACCOUNT', fetchAccountInterest);
    yield takeEvery('DELETE_FAVORITE', deleteAccountFavorite);
    yield takeEvery('UPDATE_ACCOUNT_PROPERTY', updateAccountListing);
}
// This is the listener function for the account page. 
export default accountSaga;