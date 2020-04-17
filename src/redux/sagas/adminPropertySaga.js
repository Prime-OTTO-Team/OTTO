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
function* adminPropertySaga() {
    yield takeEvery('FETCH_ADMIN_PROPERTY', fetchAdminProperty);
}
export default adminPropertySaga;