import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fireSearch(action) {
    yield console.log('in fireSearchSaga with payload', action.payload);
    let searchResponseObject = {};
    try {

        yield axios.post(`/api/search`, action.payload)
            .then(response => {
                console.log('logging response.data from search get', response.data);
                searchResponseObject = response.data;
                console.log('testing profile array', searchResponseObject);

            })
    } catch (error) {
        console.log(error);
    }
    yield put({
        type: 'SET_SEARCH_RESULT',
        data: searchResponseObject
    })

}

function* searchSaga() {
    yield takeEvery('SEARCH_PROPERTY', fireSearch);
}

export default searchSaga;