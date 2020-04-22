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
function* updateProperty(action) {
    let objectToSend = action.payload;
    console.log('in updatePropertySaga', objectToSend);
    yield axios.put('/api/property/edit', objectToSend)
    .catch((error) => {
        console.log(error);
    });
}

function* propertySaga() {
    yield takeEvery('ADD_PROPERTY', addProperty);
    yield takeEvery('UPDATE_PROPERTY', updateProperty);

}

export default propertySaga;
