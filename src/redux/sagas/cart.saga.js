import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* placeOrder(action) {
    try {
        yield axios.post('/api/cart', action.payload);
        yield put(checkoutSuccess());
        alert('Your oder has been placed!!');
    } catch (error) {
        yield put(checkoutFailure(error))
        console.log('THERE was a POST /api/order ERROR:', error);
    }
} 

function* cartSaga() {
    yield takeEvery(CHECKOUT_REQUEST, placeOrder);
}

export default cartSaga;


// const postData = {
//     first_name: user.first_name,
//     last_name: user.last_name,
//     email: user.username,
//     total: cartTotal,
//     cakebites: allCakeBites
// };
// console.log('POST DATA IN CART', postData);
// yield axios.post('/api/cart')
//     dispatch({
//         type: 'SET_CAKEBITE',
//         payload: postData
//     })

// dispatch(checkoutRequest(postData));