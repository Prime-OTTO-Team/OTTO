import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* approveUser(action) {
    try {
        let objectToSend = action.payload;
        console.log('in Sagas approveUser', objectToSend);
        yield axios.put(`/api/admin/user/approve/${objectToSend.id}`)
        yield put({
            type: 'FETCH_ADMIN_USER'
        })
    } catch (error) {
        console.log("error in approving user", error);
    }
}
function* unApproveUser(action) {
    try {
        let objectToSend = action.payload;
        console.log('in Sagas unApproveUser', objectToSend);
        yield axios.put(`/api/admin/user/unapprove/${objectToSend.id}`)
        yield put({
            type: 'FETCH_ADMIN_USER'
        })
    } catch (error) {
        console.log("error in unApproving user", error);
    }
}
function* fetchUnapprovedAdminUser() {
    try {
        const adminUserResponse = yield axios.get(`/api/admin/user/unapproved/`)
        console.log('in the GET fetchUnapprovedAdminUser', adminUserResponse)
        yield put({
            type: 'SET_ADMIN_UNAPPROVED_USER',
            payload: adminUserResponse.data
        })
    } catch (error) {
        console.log("error in fetchUnapprovedAdminUser Sagas", error);
    }
}
function* fetchApprovedAdminUser() {
    try {
        const adminUserResponse = yield axios.get(`/api/admin/user/approved/`)
        console.log('in the GET fetchApprovedAdminUser', adminUserResponse)
        yield put({
            type: 'SET_ADMIN_APPROVED_USER',
            payload: adminUserResponse.data
        })
    } catch (error) {
        console.log("error in fetchApprovedAdminUser Sagas", error);
    }
}
function* deleteUser(action) {
    try {
        let objectToSend = action.payload;
        console.log('in delete user Sagas');
        yield axios.delete(`/api/admin/user/delete/${objectToSend.id}`)
        yield put({
            type: 'FETCH_ADMIN_USER',
        })
    } catch (error) {
        console.log("error in delete user Sagas", error);
    }
}
function* adminUserSaga() {
    yield takeEvery('FETCH_ADMIN_USER', fetchUnapprovedAdminUser);
    yield takeEvery('FETCH_ADMIN_USER', fetchApprovedAdminUser);
    yield takeEvery('APPROVE_USER', approveUser);
    yield takeEvery('UNAPPROVE_USER', unApproveUser);
    yield takeEvery('DELETE_ADMIN_USER', deleteUser);
}
export default adminUserSaga;