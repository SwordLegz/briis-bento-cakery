// import { put, takeEvery, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';

// function* handlePlaceOrder(action) {
//     try {
//         const orderData = action.payload;
//         const orderResponse = yield axios.post('/api/order', orderData);
//         console.log('UR ORDER was a sucCESS:', orderResponse);

//         yield put({
//             type: 'PLACE_ORDER_SUCCESS',
//             payload: orderResponse.data
//         })
//         yield put({
//             type: 'EMPTY_CART'
//         })
//         yield put({
//             type: 'CLEAR_CART_TOTAL'
//         })
//     } catch (error) {
//         console.log('ORDER ERROR cannot dooo:', error);
//         yield put({
//             type: 'PLACE_ORDER_FALURE'
//         });
//     }
// }

// function* orderSaga() {
//     yield takeLatest('PLACE_ORDER_REQUEST', handlePlaceOrder)
// }

// export default orderSaga;

// // function* handlePlaceOrder(action) {
// //     try {
// //         const placeOrder = yield axios.post('/api/order', action.payload);
// //         yield put(placeOrderSuccess(placeOrder.data)
// //             // {
// //             // type: 'PLACE_ORDER_SUCCESS',
// //             // payload: placeOrder.data
// //         // }
// //     );
// //     } catch (error) {
// //         console.log('ORDER SAGA has an icky error:', error);
// //     }
// // }

// // function* ordersSaga() {
// //     yield takeEvery('PLACE_ORDER_REQUEST', handlePlaceOrder);
// // }

// // export default ordersSaga;