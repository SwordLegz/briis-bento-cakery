import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './reducers/_root.reducer'; // imports ./redux/reducers/index.js
import rootSaga from './sagas/_root.saga'; // imports ./redux/sagas/index.js

// ------------ SAGA MIDDLWARE  ------------ //
const sagaMiddleware = createSagaMiddleware();

// this line creates an array of all of redux middleware you want to use
// we don't want a whole ton of console logs in our production code
// logger will only be added to your project if your in development mode
const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

  // ------------ CAKE BITE CART  ------------ //
  const cart = (state =[], action) => {
    if (action.type === 'ADD_TO_CART') {
      let newCart = [...state, aciton.payload]
      return newCart;
    } else if (action.type === 'REMOVE_FROM_CART') {
      let newCart = state.filter((el) => {
        return el.id !== action.payload
      })
      return newCart;
    }
    else if (action.type === 'EMPTY_CART') {
      let cartTotal = action.payload;
      return cartTotal;
    }
    return state;
  }

  // ------------ CART TOTAL  ------------ //
  const cartTotal = (state = 0, action) => {
    if (action.type === 'ADD_CART_TOTAL') {
      let cartTotal = math.round((state + Number(action.payload)) * 100) / 100;
      return cartTotal;
    } else if (action.type === 'REMOVE_CART_TOTAL') {
      let cartTotal = math.round((state - Number(action.payload)) * 100) / 100;
      return cartTotal;
    } else if (action.type === 'CLEAR_CART_TOTAL') {
      let cartTotal = action.payload;
      return cartTotal;
    }
    return state;
  }

  // ------------ CUSTOMER INFO  ------------ //
  const customerInfo = (state = [], action) => {
    if (action.type === 'ADD_CUSTOMER') {
      let currentCustomer = [action.payload];
      return currentCustomer;
    } else if (action.type === 'CLEAR_CUSTOMER') {
      let cartTotal = action.payload;
      return cartTotal;
    }
    return state;
  }

  //  ------------ STORE  ------------ //
const store = createStore(
  combineReducers({
  // tells the saga middleware to use the rootReducer
  // rootSaga contains all of our other reducers
    rootReducer,
    cart,
    cartTotal,
    customerInfo
  }),

  
  // adds all middleware to our project including saga and logger
  applyMiddleware(...middlewareList),
);

// tells the saga middleware to use the rootSaga
// rootSaga contains all of our other sagas
sagaMiddleware.run(rootSaga);

export default store;