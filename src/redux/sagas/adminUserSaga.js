import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* approveUser(action) {
    try {
        const objectToSend = action.payload;
        yield axios.put(`/api/admin/user/approve/${objectToSend.id}`)
        yield put({
            type: 'FETCH_ADMIN_USER'
        })
    } catch (error) {
        console.log(error);
    }
}
// Sends the signal to the server to approve a user from an admin page

function* unApproveUser(action) {
    try {
        const objectToSend = action.payload;
        yield axios.put(`/api/admin/user/unapprove/${objectToSend.id}`)
        yield put({
            type: 'FETCH_ADMIN_USER'
        })
    } catch (error) {
        console.log(error);
    }
}
// Sends the signal to the server to revoke approval a user from the admin page. 

function* approveAdmin(action) {
    try {
        const objectToSend = action.payload;
        yield axios.put(`/api/admin/user/approveAdmin/${objectToSend.id}`)
    } catch (error) {
        console.log(error);
    }
}
// This is used to create new admins

function* fetchUnapprovedAdminUser() {
    try {
        const adminUserResponse = yield axios.get(`/api/admin/user/unapproved/`)
        yield put({
            type: 'SET_ADMIN_UNAPPROVED_USER',
            payload: adminUserResponse.data
        })
    } catch (error) {
        console.log(error);
    }
}
// This is used to unapprove an admin

function* fetchApprovedAdminUser() {
    try {
        const adminUserResponse = yield axios.get(`/api/admin/user/approved/`)
        yield put({
            type: 'SET_ADMIN_APPROVED_USER',
            payload: adminUserResponse.data
        })
    } catch (error) {
        console.log(error);
    }
}
// This fetches all the approved users for the admin page

function* fetchApprovedAdminAdmin() {
    try {
        const adminAdminResponse = yield axios.get(`/api/admin/user/approvedAdmin/`)
        yield put({
            type: 'SET_ADMIN_APPROVED_ADMIN',
            payload: adminAdminResponse.data
        })
    } catch (error) {
        console.log(error);
    }
}
// This fetches all the unApproved users for the admin page

function* deleteUser(action) {
    try {
        let objectToSend = action.payload;
        yield axios.delete(`/api/admin/user/delete/${objectToSend.id}`)
        yield put({
            type: 'FETCH_ADMIN_USER',
        })
    } catch (error) {
        console.log(error);
    }
}
//This will send a signal to permanently delete a user

function* adminUserSaga() {
    yield takeEvery('FETCH_ADMIN_USER', fetchUnapprovedAdminUser);
    yield takeEvery('FETCH_ADMIN_USER', fetchApprovedAdminUser);
    yield takeEvery('FETCH_ADMIN_ADMIN', fetchApprovedAdminAdmin);
    yield takeEvery('APPROVE_USER', approveUser);
    yield takeEvery('UNAPPROVE_USER', unApproveUser);
    yield takeEvery('APPROVE_ADMIN', approveAdmin);
    yield takeEvery('DELETE_ADMIN_USER', deleteUser);
}
//Listens for a particular dispatch

export default adminUserSaga;