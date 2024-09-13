import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchCakeBites() {
    try {
        const cakeBites = yield axios.get('/api/shop')
        yield put({
            type: 'SET_CAKEBITES',
            payload: cakeBites.data
        })
    } catch (error) {
        console.log('SHOP SAGA got a bum request from shop.saga', error);
    }
}

function* addCakebiteToCart (action) {
    try {
        const cakebiteToAdd = action.payload[0];
        yield put({
            type: 'ADD_CAKEBITE_TO_CART', 
            payload: cakebiteToAdd
        })
        console.log('cakebite added to cart in shop.saga:', cakebiteToAdd)
    } catch (error) {
        console.log('BUTTS ya gotsta err:', error)
    }
}



function* shopSaga() {
    yield takeLatest('FETCH_CAKEBITES', fetchCakeBites)
    yield takeLatest('ADD_ORDER_TO_CART', addCakebiteToCart)
}

export default shopSaga;