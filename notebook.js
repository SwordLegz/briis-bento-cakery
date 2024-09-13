// Swal.fire({
//   title: "Delete from cart?",
//   text: "You are about to delete these from your cart!",
//   icon: "warning",
//   showCancelButton: true,
//   confirmButtonColor: "#3085d6",
//   cancelButtonColor: "#d33",
//   cancelButtonText: "Wait, don't delete!",
//   confirmButtonText: "Yes, delete plz!"
// }).then((result) => {
//   if (result.isConfirmed) {
//       dispatch({
//           type: 'DELETE_ITEM_FROM_CART',
//       payload: postData
//       })
//   }}).catch(error => {
//       alert('ERRORRR Deleting from cart in Cart.jsx:', error);
//     });


// ---------- SWALFIRE CONFIRM ORDER BUTTON -------- //
// Swal.fire({
//   title: "Send Order?",
//   text: "You are about to submit your order!",
//   icon: "warning",
//   showCancelButton: true,
//   confirmButtonColor: "#3085d6",
//   cancelButtonColor: "#d33",
//   cancelButtonText: "Wait, don't send order yet!",
//   confirmButtonText: "Yes, send my order plz!"
// }).then((result) => {
//   if (result.isConfirmed) {
//       Swal.fire({
//           title: "Thankiezzz!",
//           text: "If you'd like to make changes to your order, you can do so through your profile!",
//           imageUrl: "../images/octopus.jpeg",
//           imageWidth: 400,
//           imageHeight: 400,
//           // imageAlt: "Custom image"
//         });
//   }
// });




// // ------------- MOCK STORE CODE?? ------------- //

// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';
// import { takeLatest, takeEvery } from 'redux-saga';
// import axios from 'axios';

// import { all } from 'redux-saga/effects';
// // import loginSaga from './login.saga';
// // import registrationSaga from './registration.saga';
// // import userSaga from './user.saga';
// // import shopSaga from './shop.saga';
// // import rootReducer from './reducers/_root.reducer'; // imports ./redux/reducers/index.js
// // import rootSaga from './sagas/_root.saga'; // imports ./redux/sagas/index.js

// // this line creates an array of all of redux middleware you want to use
// // we don't want a whole ton of console logs in our production code
// // logger will only be added to your project if your in development mode

// // const middlewareList = process.env.NODE_ENV === 'development' ?
// //   [sagaMiddleware, logger] :
// //   [sagaMiddleware];

// // 3. ------------ GENERATOR FUNCTIONS  ------------ //
// // Create rootSaga generator function
// function* rootSaga() {
//   // 'FETCH_CAKEBITES' yield goes here //
//   yield takeEvery('FETCH_CAKEBITES', fetchCakeBites);
//   // 'FETCH_CAKEBITES_DETAILS' yield goes here //
//   yield takeLatest('FETCH_CAKEBITES_DETAILS', fetchCakeBitesDetails);
// }

// function* fetchCakeBites() {
//   try {
//     // GET THE CAKEBITES LIST:
//     const cakebiteResponse = yield axios.get(`/api/cakebites`);
//     // SET THE ALUE OF THE CAKEBITES REDUCER
//     yield put({
//       type: 'SET_CAKEBITES',
//       payload: cakebiteResponse.data
//     });
//   } catch (error) {
//     console.log('HEEEEY fetchCakeBites error:', error);
//   }
// }

// function* fetchCakeBitesDetails() {
//   try {
//     console.log('YOU ARE in fetchCakeBitesDetails generator FUNCTION:', action.payload);
//     const cakebiteResponse = yield axios.get(`/api/details/${action.payload}`);
//     console.log('YYOOO in cakebitesResponse DETAILS generator, the response is:', cakebiteResponse);
//     yield put ({
//       type: 'SET_CAKEBITE_DETAILS',
//       payload: cakebiteResponse.data
//     });
//   } catch (error) {
//     console.log('fetchCakeBitesDetails SAGA ERROR:', error);
//   }
// }
// // ------------ END OF GENERATOR FUNCTIONS  ------------ //

// // 4. *---------- OBSOLETE REDUCERS  ---------- * //

// ------------ OBSOLETE CAKE BITE ITEM REDUCER------------ //
// const currentCakeBite = (state = {}, action) => {
//   console.log('HI! currentCakeBite reducerrrr:', action)
//   if (action.type === 'SET_CAKEBITES') {
//     const flavors = []
//     for (let result of action.payload) {
//       flavors.push(result.flavor)
//     }
//     let cakeBiteObject = {
//       cakebiteId: action.payload[0].id,
//       cakebiteFlavor: action.payload[0].flavor,
//       image: action.payload[0].image,
//       description: action.payload[0].description
//     }
//     return cakeBiteObject
//   }
//   return state;
// }

  // ------------ CAKE BITE CART REDUCER ------------ //
  // const cart = (state =[], action) => {
  //   if (action.type === 'ADD_TO_CART') {
  //     let newCart = [...state, aciton.payload]
  //     return newCart;
  //   } else if (action.type === 'REMOVE_FROM_CART') {
  //     let newCart = state.filter((el) => {
  //       return el.id !== action.payload
  //     })
  //     return newCart;
  //   }
  //   else if (action.type === 'EMPTY_CART') {
  //     let cartTotal = action.payload;
  //     return cartTotal;
  //   }
  //   return state;
  // }

    // ------------ CART TOTAL REDUCER ------------ //
  // const cartTotal = (state = 0, action) => {
  //   if (action.type === 'ADD_CART_TOTAL') {
  //     let cartTotal = math.round((state + Number(action.payload)) * 100) / 100;
  //     return cartTotal;
  //   } else if (action.type === 'REMOVE_CART_TOTAL') {
  //     let cartTotal = math.round((state - Number(action.payload)) * 100) / 100;
  //     return cartTotal;
  //   } else if (action.type === 'CLEAR_CART_TOTAL') {
  //     let cartTotal = action.payload;
  //     return cartTotal;
  //   }
  //   return state;
  // }

  // ------------ CUSTOMER INFO REDUCER?? ------------ //
  // const customerInfo = (state = [], action) => {
  //   if (action.type === 'ADD_CUSTOMER') {
  //     let currentCustomer = [action.payload];
  //     return currentCustomer;
  //   } else if (action.type === 'CLEAR_CUSTOMER') {
  //     let cartTotal = action.payload;
  //     return cartTotal;
  //   }
  //   return state;
  // }

  

// // Used to store cakebites returned from the server //

// const cakebitesList = (state = [], action) => {
//   console.log('HEEEEYYY cakebites reducer payload is:', action.payload);
//   switch (action.type) {
//       case "SET_CAKEBITES":
//           return action.payload;
//       default:
//           return state;
//   }
// };

// // Used for single cakebite deatils returned from server //
// const currentCakeBite = (state = {}, action) => {
//   console.log('HI! currentCakeBite reducerrrr:', action)
//   if (action.type === 'SET_CAKEBITES_DETAILS') {
//     const flavors = [];
//     // for (let result of action.payload) {
//     //   // flavors.push(result.flavor)
//     // }
//     let cakeBiteObject = {
//       cakebiteId: action.payload[0].id,
//       cakebiteFlavor: action.payload[0].flavor,
//       image: action.payload[0].image,
//       description: action.payload[0].description
//     }
//     return cakeBiteObject
//   } else if (action.type === 'BACK_TO_SHOP') {
//     return action.payload;
//   }
//   return state;
// }

//   // ------------ CAKE BITE CART  ------------ //
//   // const cart = (state =[], action) => {
//   //   if (action.type === 'ADD_TO_CART') {
//   //     let newCart = [...state, aciton.payload]
//   //     return newCart;
//   //   } else if (action.type === 'REMOVE_FROM_CART') {
//   //     let newCart = state.filter((el) => {
//   //       return el.id !== action.payload
//   //     })
//   //     return newCart;
//   //   }
//   //   else if (action.type === 'EMPTY_CART') {
//   //     let cartTotal = action.payload;
//   //     return cartTotal;
//   //   }
//   //   return state;
//   // }

//   // ------------ CART TOTAL  ------------ //
//   // const cartTotal = (state = 0, action) => {
//   //   if (action.type === 'ADD_CART_TOTAL') {
//   //     let cartTotal = math.round((state + Number(action.payload)) * 100) / 100;
//   //     return cartTotal;
//   //   } else if (action.type === 'REMOVE_CART_TOTAL') {
//   //     let cartTotal = math.round((state - Number(action.payload)) * 100) / 100;
//   //     return cartTotal;
//   //   } else if (action.type === 'CLEAR_CART_TOTAL') {
//   //     let cartTotal = action.payload;
//   //     return cartTotal;
//   //   }
//   //   return state;
//   // }

//   // ------------ CUSTOMER INFO  ------------ //
//   // const customerInfo = (state = [], action) => {
//   //   if (action.type === 'ADD_CUSTOMER') {
//   //     let currentCustomer = [action.payload];
//   //     return currentCustomer;
//   //   } else if (action.type === 'CLEAR_CUSTOMER') {
//   //     let cartTotal = action.payload;
//   //     return cartTotal;
//   //   }
//   //   return state;
//   // }
// // 1. ------------ SAGA MIDDLWARE  ------------ //
// const sagaMiddleware = createSagaMiddleware();

//   //  2. ------------ COMBINE REDUCERS STORE  ------------ //
// const storeInstance = createStore(
//     combineReducers({
//       cakebitesList,
//       currentCakeBite

//     }),
//   // tells the saga middleware to use the rootReducer
//   // rootSaga contains all of our other reducers
//   // rootReducer,
//   // adds all middleware to our project including saga and logger
//   applyMiddleware(sagaMiddleware, logger),
// );

// // tells the saga middleware to use the rootSaga
// // rootSaga contains all of our other sagas
// sagaMiddleware.run(rootSaga);

// export default store;

// ------------ MOCK SHOP SAGA ------------- //
import axios from 'axios';
// import { put, takeLatest } from 'redux-saga/effects';

// function* fetchCakeBites() {
//     try {
//         // GET CAKEBITES: //
//         const cakeBitesResponse = yield axios.get('/api/shop')
//         yield put({
//             type: 'SET_CAKEBITES',
//             payload: cakeBitesResponse.data
//         });
//     } catch (error) {
//         console.log('SHOP SAGA got a bum request', error);
//     }
// }

// function* shopSaga() {
//     yield takeLatest('GET_CAKEBITES_DETAILS', fetchCakeBites);
// }

// export default shopSaga;

// ------------- MOCK SHOP ROUTER ------------ //
// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();

// router.get('/', (req, res) => {
//     const query = `
//     SELECT * FROM "cakebites"
//     ORDER BY "id";
//     `;
//     pool.query(query)
//     .then(result => {
//         res.send(result.rows);
//     })
//     .catch(error => {
//         console.log('ERROR: Get all cakebites:', error);
//         res.sendStatus(500)
//     })
// });

// router.post('/', (req, res) => {
//     console.log('REQ BODY SHOP POST ROuter:', req.body);
//     const insertCakebiteQuery = `
//     INSERT INTO "cakebites"
//     ("flavor", "image", "description")
//     VALUES ($1, $2, $3)
//     RETURNING "id";
//     `;

//     const insertCakebiteValues = [
//         req.body.flavor,
//         req.body.image,
//         req.body.description
//     ]
//     pool.query(insertCakebiteQuery, insertCakebiteValues)
//     .then(result => {
//         const createCakebiteId = result.rows[0].id

//     }).catch(error => {
//         console.log('YIKES an ERROR:', error);
//         res.sendStatus(500)
//     })
// });

// router.get('/', (req, res) => {
//     console.log('HIYA GET /api/shop');
//     pool.query('SELECT * from "cakebites";')
//     .then((result) => {
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log('YO ERROR GET /api/shop', error)
//         res.sendStatus(500);
//     });
// })

// module.exports = router;







// // // So this was before redux etc...so everything was being passed
// // // as props through the components.  but the overall List looks 
// // // like this.


// // // and then the individual Items that get rendered in the list 
// // // are like this.


// // import React from "react"
// // import { useState } from "react";
// // import './GalleryItem.css'
// // const GalleryItem = ({item, youLoveArt, deleteArt}) => {
// //     const { url, title, description, likes } = item
   
// //     const [showDescription, setShowDescription] = useState(false);
// //     const toggleDescription = () => {
// //       setShowDescription(!showDescription);
// //     };
// //     return (
// //         <div className="gallery-item-container" data-testid="galleryItem">
// //           <div className="title">{title} <button className="delete-button" onClick={deleteArt}>X</button></div>
// //           <div
// //             data-testid="toggle"
// //             className={`gallery-item ${showDescription ? "show-description" : ""}`}
// //             onClick={toggleDescription}
// //           >
// //             {showDescription ? <div className="center" ><p>{description}</p></div> : <img src={url} alt={title} />}
// //           </div>
// //           <div className="like-container">
// //         <button className="like-button" data-testid="like" onClick={youLoveArt}>
// //           Love this Art! :blue_heart:
// //         </button>
// //         </div>
// //         <div className="like-counter">
// //         <div>{likes} People love this!</div>
// //       </div>
// //         </div>
// //       );
// //     };
    
// // export default GalleryItem;



// // // // ------------ CB PRICES/QTY  ------------ //

// // // // function basePrice () {
// // // //     const price = 34.99;
// // // //     if ()


// // // // }
// // // import { createStore, applyMiddleware, combineReducers } from 'redux';
// // // import createSagaMiddleware from 'redux-saga';
// // // import logger from 'redux-logger';

// // // import rootReducer from './reducers/_root.reducer'; // imports ./redux/reducers/index.js
// // // import rootSaga from './sagas/_root.saga'; // imports ./redux/sagas/index.js
// // // import { takeLatest } from 'redux-saga/effects';

// // // // ------------ SAGA MIDDLWARE  ------------ //
// // // const sagaMiddleware = createSagaMiddleware();

// // // // this line creates an array of all of redux middleware you want to use
// // // // we don't want a whole ton of console logs in our production code
// // // // logger will only be added to your project if your in development mode
// // // const middlewareList = process.env.NODE_ENV === 'development' ?
// // //   [sagaMiddleware, logger] :
// // //   [sagaMiddleware];

// // //   // ------------ CAKE BITE LIST  ------------ //
// // //   const cakeList = (state = [], action) => {
// // //     if (action.type === 'SET_CAKES') {
// // //       return action.payload
// // //     }
// // //     return state;
// // //   }

// // //   // ------------ CAKE BITE CART  ------------ //
// // //   const cart = (state =[], action) => {
// // //     if (action.type === 'ADD_TO_CART') {
// // //       let newCart = [...state, aciton.payload]
// // //       return newCart;
// // //     } else if (action.type === 'REMOVE_FROM_CART') {
// // //       let newCart = state.filter((el) => {
// // //         return el.id !== action.payload
// // //       })
// // //       return newCart;
// // //     }
// // //     else if (action.type === 'EMPTY_CART') {
// // //       let cartTotal = action.payload;
// // //       return cartTotal;
// // //     }
// // //     return state;
// // //   }

// // //   // ------------ CART TOTAL  ------------ //
// // //   const cartTotal = (state = 0, action) => {
// // //     if (action.type === 'ADD_CART_TOTAL') {
// // //       let cartTotal = math.round((state + Number(action.payload)) * 100) / 100;
// // //       return cartTotal;
// // //     } else if (action.type === 'REMOVE_CART_TOTAL') {
// // //       let cartTotal = math.round((state - Number(action.payload)) * 100) / 100;
// // //       return cartTotal;
// // //     } else if (action.type === 'CLEAR_CART_TOTAL') {
// // //       let cartTotal = action.payload;
// // //       return cartTotal;
// // //     }
// // //     return state;
// // //   }

// // //   // ------------ CUSTOMER INFO  ------------ //
// // //   const customerInfo = (state = [], action) => {
// // //     if (action.type === 'ADD_CUSTOMER') {
// // //       let currentCustomer = [action.payload];
// // //       return currentCustomer;
// // //     } else if (action.type === 'CLEAR_CUSTOMER') {
// // //       let cartTotal = action.payload;
// // //       return cartTotal;
// // //     }
// // //     return state;
// // //   }

// // //   //  ------------ STORE  ------------ //
// // // const store = createStore(
// // //   combineReducers({
// // //   // tells the saga middleware to use the rootReducer
// // //   // rootSaga contains all of our other reducers
// // //     rootReducer,
// // //     cakeList,
// // //     cart,
// // //     cartTotal,
// // //     customerInfo
// // //   }),

// // // //  ------------ ROOT SAGAS REDUCER  ------------ //  
// // // function* rootSaga () {
// // //   yield takeLatest('ADD_TO_CART', cart),
// // //   yield takeLatest ('SET_CAKES', cakeList)
// // //   yield takeLatest('ADD_CART_TOTAL', cartTotal),
// // //   yield takeLatest('ADD_CUSTOMER', customerInfo)
// // // },
  
// // //   // adds all middleware to our project including saga and logger
// // //   applyMiddleware(...middlewareList),
// // // );

// // // // tells the saga middleware to use the rootSaga
// // // // rootSaga contains all of our other sagas
// // // sagaMiddleware.run(rootSaga);

// // // export default store;

// // <Route exact path="/shop">
// //             <ShopCakeBites />
// //           </Route>



