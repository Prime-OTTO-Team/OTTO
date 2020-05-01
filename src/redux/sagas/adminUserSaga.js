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
        console.log("error in approving user", error);
    }
}

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

function* approveAdmin(action) {
    try {
        const objectToSend = action.payload;
        yield axios.put(`/api/admin/user/approveAdmin/${objectToSend.id}`)
    } catch (error) {
        console.log(error);
    }
}

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