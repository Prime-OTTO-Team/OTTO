import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAdminProperty() {
    try {
        const adminPropertyResponse = yield axios.get(`/api/admin/property/`)
        yield put({
            type: 'SET_ADMIN_PROPERTY',
            payload: adminPropertyResponse.data
        })
    } catch (error) {
        console.log(error);
    }
}
// Fetches all the properties to be displayed on the admin page

function* fetchAdminPropertyHistory() {
    try {
        const adminPropertyResponse = yield axios.get(`/api/admin/property/history`)
        yield put({
            type: 'SET_ADMIN_PROPERTY_HISTORY',
            payload: adminPropertyResponse.data
        })
    } catch (error) {
        console.log(error);
    }
}
// Fetches all the inactive properties on the site. 

function* updateAdminProperty(action) {
    try{
        let objectToSend = action.payload.id;
        yield axios.put(`/api/admin/property/${objectToSend}`)
        yield put({
            type: 'FETCH_ADMIN_PROPERTY',
            payload: action.payload.user_id
        })
    } catch (error) {
        console.log(error);
    }
}
// This will change a properties status and put it into the history

function* deleteAdminProperty(action) {
    try{
        let objectToSend = action.payload;
        yield axios.delete(`/api/admin/property/delete/${objectToSend}`)
        yield put({
            type: 'FETCH_ADMIN_PROPERTY',
            payload: action.payload.user_id
        })
    } catch (error) {
        console.log(error);
    }
}
// This will permanently delete a property from the plants. 

function* adminPropertySaga() {
    yield takeEvery('FETCH_ADMIN_PROPERTY', fetchAdminProperty);
    yield takeEvery('FETCH_ADMIN_PROPERTY', fetchAdminPropertyHistory);
    yield takeEvery('UPDATE_ADMIN_PROPERTY', updateAdminProperty);
    yield takeEvery('DELETE_ADMIN_PROPERTY', deleteAdminProperty);
}
//Listens for a particular dispatch

export default adminPropertySaga;