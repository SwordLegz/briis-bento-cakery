import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchCakeBites() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          };

        const cakeBites = yield axios.get('/api/shop', config)
        yield put({
            type: 'SET_CAKEBITES',
            payload: cakeBites.data
        })
    } catch (error) {
        console.log('SHOP SAGA got a bum request', error);
    }
}

function* shopSaga() {
    yield takeLatest('FETCH_CAKEBITES', fetchCakeBites);
}

export default shopSaga;