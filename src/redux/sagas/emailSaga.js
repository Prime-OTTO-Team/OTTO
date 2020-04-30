import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* sendEmail(action){
    try{
    console.log('in sendEmail', action.payload);
    yield axios.post('/api/email', action.payload)
    }
    catch (error) {
    console.log('Error with send email', error);
  }

}



function* emailSaga() {
  yield takeEvery('SEND_EMAIL', sendEmail);
}

export default emailSaga;
