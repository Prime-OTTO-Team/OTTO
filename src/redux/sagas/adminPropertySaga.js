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
        const adminPropertyResponse = yield axios.get(`/api/admin/property/history`)
        console.log('in the GET fetchAdminProperty', adminPropertyResponse)
        yield put({
            type: 'SET_ADMIN_PROPERTY_HISTORY',
            payload: adminPropertyResponse.data
        })
    } catch (error) {
        console.log("error in fetchAdminPropertyHistory Sagas", error);
    }
}
function* updateAdminProperty(action) {
    try{
        console.log('in sagas updateAdminProperty', action.payload);
        let objectToSend = action.payload.id;
        yield axios.put(`/api/admin/property/${objectToSend}`)
        yield put({
            type: 'FETCH_ADMIN_PROPERTY',
            payload: action.payload.user_id
        })
    } catch (error) {
        console.log("error in sagas updateAdminProperty", error);
    }
}
function* deleteAdminProperty(action) {
    try{
        console.log('in sagas deleteAdminProperty', action.payload);
        let objectToSend = action.payload;
        yield axios.delete(`/api/admin/property/delete/${objectToSend}`)
        yield put({
            type: 'FETCH_ADMIN_PROPERTY',
            payload: action.payload.user_id
        })
    } catch (error) {
        console.log("error in sagas deleteAdminProperty", error);
    }
}
function* adminPropertySaga() {
    yield takeEvery('FETCH_ADMIN_PROPERTY', fetchAdminProperty);
    yield takeEvery('FETCH_ADMIN_PROPERTY', fetchAdminPropertyHistory);
    yield takeEvery('UPDATE_ADMIN_PROPERTY', updateAdminProperty);
    yield takeEvery('DELETE_ADMIN_PROPERTY', deleteAdminProperty);
}
//Listens for a particular dispatch

export default adminPropertySaga;