import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* sendEmail(action){
    try{
    yield axios.post('/api/email', action.payload)
    }
    catch (error) {
    console.log('Error with send email', error);
  }
}
// Sends an email to marketFare about properties. 
function* emailSaga() {
  yield takeEvery('SEND_EMAIL', sendEmail);
}
//Listens for a particular dispatch

export default emailSaga;
