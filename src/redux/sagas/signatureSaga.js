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

function* getSignature(action) {
  let ndaResponse = {};
  try {
    let idToSend = {id:action.payload};
    console.log('in getSignature', idToSend);
    yield axios.post('/api/signature/get', idToSend)
.then(response => {
      ndaResponse = response.data;
    })
    yield put({
      type: 'SET_NDAS',
      payload: ndaResponse
    })
  }
  catch (error) {
    console.log('Error with get signature', error);
  }

}


function* signatureSaga() {
  yield takeEvery('SEND_SIGNATURE', sendSignature);
  yield takeEvery('GET_SIGNATURE', getSignature);
}

export default signatureSaga;
