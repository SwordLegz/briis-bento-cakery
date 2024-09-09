import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* handleCart(action) {
    try {
        const response = yield axios.post('/api/order')
        yield put(checkoutSuccess());
        alert('Your oder has been placed!!');
    } catch (error) {
        yield put(checkoutFailure(error))
        console.log('THERE was a POST /api/order ERROR:', error);
    }
} 

function* cartSaga() {
    yield takeEvery(CHECKOUT_REQUEST, handleCart);
}

export default cartSaga;