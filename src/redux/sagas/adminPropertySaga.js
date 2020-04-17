import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

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
function* fetchAdminPropertyHistory() {
    try {
        console.log('from sagas fetchAdminPropertyHistory');
        const adminPropertyResponse = yield axios.get(`/api/admin/history`)
        console.log('in the GET fetchAdminProperty', adminPropertyResponse)
        yield put({
            type: 'SET_ADMIN_PROPERTY_HISTORY',
            payload: adminPropertyResponse.data
        })
    } catch (error) {
        console.log("error in fetchAdminPropertyHistory Sagas", error);
    }
}
function* adminPropertySaga() {
    yield takeEvery('FETCH_ADMIN_PROPERTY', fetchAdminProperty);
    yield takeEvery('FETCH_ADMIN_PROPERTY', fetchAdminPropertyHistory);
}
export default adminPropertySaga;