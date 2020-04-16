import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* approveUser(action) {
    try {
        console.log('from sagas approveUser');

        let objectToSend = action.payload;
        console.log('in approveUser', objectToSend);
        yield axios.put(`/api/admin/approve/${objectToSend.id}`)
        yield put({
            type: 'FETCH_ADMIN_USER'
        })
    } catch (error) {
        console.log("error in approving user", error);
    }
}


function* fetchAdminProperty() {
    try {
        console.log('from sagas fetchAdminProperty');
        const adminPropertyResponse = yield axios.get(`/api/admin/property/`)
        console.log('in the GET fetchAdminProperty', adminPropertyResponse)
        yield put({
            type: 'SET_ADMIN_PROPERTY',
            payload: adminPropertyResponse.data
        })
    } catch (error) {
        console.log("error in fetchAdminProperty Sagas", error);
    }
}
function* fetchAdminUser() {
    try {
        console.log('from sagas fetchAdminUser');
        const adminUserResponse = yield axios.get(`/api/admin/user/`)
        console.log('in the GET fetchAccountFavorite', adminUserResponse)
        yield put({
            type: 'SET_ADMIN_USER',
            payload: adminUserResponse.data
        })
    } catch (error) {
        console.log("error in adminUserResponse Sagas", error);
    }
}


function* accountSaga() {
    yield takeEvery('FETCH_ADMIN_PROPERTY', fetchAdminProperty);
    yield takeEvery('FETCH_ADMIN_USER', fetchAdminUser);
    yield takeEvery('APPROVE_USER', approveUser);
}
export default accountSaga;