import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addProperty(action) {
    let objectToSend = action.payload;
    yield axios.post('/api/property', objectToSend)
        .catch((error) => {
            console.log(error);
        });
}
//This adds a property to the database

function* updateProperty(action) {
    let objectToSend = action.payload;
    yield axios.put('/api/property/edit', objectToSend)
    .catch((error) => {
        console.log(error);
    });
}
// This updates a property in the database

function* propertySaga() {
    yield takeEvery('ADD_PROPERTY', addProperty);
    yield takeEvery('UPDATE_PROPERTY', updateProperty);
}
//Listens for a particular dispatch

export default propertySaga;
