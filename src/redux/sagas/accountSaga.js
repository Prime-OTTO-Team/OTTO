import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAccountListing(action) {
    try {
        console.log('from sagas fetchAccountListing');
        let objectToSend = action.payload;
        console.log('checking objectToSend', objectToSend);
        const accountResponse = yield axios.get(`/api/account/property/${objectToSend}`)
        console.log('in the GET fetchAccountListing', accountResponse)
        yield put({
            type: 'SET_ACCOUNT_LISTING',
            payload: accountResponse.data
        })
    } catch (error) {
        console.log("error in fetchAccountListing Sagas", error);
    }
}
function* fetchAccountFavorite(action) {
    try {
        console.log('from sagas fetchAccountFavorite');
        let objectToSend = action.payload;
        console.log('checking objectToSend', objectToSend);
        const accountResponse = yield axios.get(`/api/account/interest/${objectToSend}`)
        console.log('in the GET fetchAccountFavorite', accountResponse)
        yield put({
            type: 'SET_ACCOUNT_FAVORITE',
            payload: accountResponse.data
        })
    } catch (error) {
        console.log("error in fetchAccountFavorite Sagas", error);
    }
}


function* accountSaga() {
    yield takeEvery('FETCH_ACCOUNT', fetchAccountListing);
    yield takeEvery('FETCH_ACCOUNT', fetchAccountFavorite)
}
export default accountSaga;