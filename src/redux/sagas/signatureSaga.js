import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* sendSignature(action){
    try{
    console.log('in sendSignature', action.payload);
    yield axios.post('/api/signature', action.payload)
    }
    catch (error) {
    console.log('Error with send signature', error);
  }

}



function* signatureSaga() {
  yield takeEvery('SEND_SIGNATURE', sendSignature);
}

export default signatureSaga;
