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
        console.log('SHOP SAGA got a bum request', error);
    }
}

function* addCakebiteToCart (action) {
    try {
        const cakebiteToAdd = action.payload[0];
        console.log('cakebite being added:', cakebiteToAdd)
        // let cakeBiteItem = {
        //     flavor: cakebiteToAdd.flavor,
        //     quantity: cakebiteToAdd.quantity
        // }
        // console.log(cakeBiteItem)
        yield put({type: 'ADD_CAKEBITE_TO_CART', payload: cakebiteToAdd})
        console.log('cakebite added to cart:', cakebiteToAdd)
    } catch (error) {

    }
}

function* shopSaga() {
    yield takeLatest('FETCH_CAKEBITES', fetchCakeBites)
    yield takeLatest('ADD_ORDER_TO_CART', addCakebiteToCart)
}

export default shopSaga;