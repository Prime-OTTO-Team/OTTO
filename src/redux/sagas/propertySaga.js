import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addProperty(action) {
    let objectToSend = action.payload;
    console.log('in propertySaga', objectToSend);
    yield axios.post('/api/property', objectToSend)
        .catch((error) => {
            console.log(error);
        });
}

function* propertySaga() {
    yield takeEvery('ADD_PROPERTY', addProperty);
}

export default propertySaga;
