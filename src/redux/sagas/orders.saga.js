import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


// -------- SENDS CART TO DATABASE, CLEARING "PENDING_CART" -------- //
function* handlePlaceOrder(action) {
    try {
        const orderData = action.payload;
        console.log('OrderData in orders.saga:', orderData);
        const orderResponse = yield axios.post('/api/orders', orderData);
        console.log('UR ORDER was a sucCESS from orders.saga:', orderResponse);

        yield put({
            type: 'SET_ORDER',
            payload: orderResponse.data
        })
        const userId = orderData.user_id;
        yield axios.delete(`/api/cart/pending/${userId}`);
        yield put({
            type: 'EMPTY_CART',
        })
        yield put({
            type: 'CLEAR_CART_TOTAL'
        })
    } catch (error) {
        console.log('ORDER ERROR cannot dooo in orders.saga:', error);
        yield put({
            type: 'PLACE_ORDER_FALURE'
        });
    }
}
// -------- END SENDS CART TO DATABASE, CLEARING "PENDING_CART" -------- //



function* orderSaga() {
    yield takeLatest('ORDER_IS_SENT', handlePlaceOrder)
}

export default orderSaga;

