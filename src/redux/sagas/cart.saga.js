
import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

// GETS ITEMS IN CART //
function* fetchCartItems() {
    try {
        const cartItems = yield axios.get('/api/cart')
        yield put({
            type: 'SET_CART_ITEMS',
            payload: cartItems.data
        })
    } catch (error) {
        console.log('FetchCartItems SAGA dun like you in cart.saga', error);
    }
}
// ADDS ITEM TO CART //
function* handleCart(action) {
    console.log('hi')
    try {
        // const cakebiteInCart = action.payload[0];
        yield axios.post('/api/cart', action.payload);
        const pendingCartItems = yield axios.get('/api/cart/pending')
        yield put({
            type: 'ADD_PENDING_TO_CART',
            payload: pendingCartItems.data
        })
    } catch (error) {
        console.log('Oopiezz was a prob in cart.saga:', error);
    }
} 
// LOADS ITEMS BACK IN CART AFTER USER LOGS OUT AND BACK IN //
function* populateCart(action) {
    try {
        const pendingCartItems = yield axios.get('/api/cart/pending')
        yield put({
            type: 'ADD_PENDING_TO_CART',
            payload: pendingCartItems.data
        })
    } catch (error){
        
    }
}

// -------- DELETES ITEM FROM CART -------- //
function* handleDelete(action) {
    try {
        yield axios.delete(`/api/cart/pending/${action.payload}`);
        yield put({
            type: 'POPULATE_CART'
        });
    } catch (error) {
        console.log('OohWhoops handleDelete in cart.saga no good:', error);
    }
}

// -------- PLACE ORDER -------- //
function* handlePlaceOrder(action) {
    try {
        yield axios.post('/api/orders', action.payload);
        yield put({
            type: 'ORDER_PLACED'
        })
    } catch (error) {
        console.log('NoNoNoN bad handlePlaceOrder in cart.saga:', error)
    }
}


function* cartSaga() {
    yield takeLatest('POPULATE_CART', populateCart)
    yield takeLatest('FETCH_CART', fetchCartItems)
    yield takeEvery('ADD_CAKE_TO_CART', handleCart)
    yield takeEvery('REMOVE_ITEM_FROM_CART', handleDelete)
    yield takeEvery('ORDER_PLACED', handlePlaceOrder)
}

export default cartSaga;