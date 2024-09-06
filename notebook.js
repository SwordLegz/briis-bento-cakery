// // So this was before redux etc...so everything was being passed
// // as props through the components.  but the overall List looks 
// // like this.

// import React from 'react';
// import GalleryItem from '../GalleryItem/GalleryItem';
// import './GalleryList.css'
// function GalleryList({ galleryItems, youLoveArt, deleteArt }) {
//   return (
//     <div data-testid="galleryList" className="gallery-list">
//       {galleryItems.map((item) => (
//         <GalleryItem 
//         key={item.id} 
//         item={item} 
//         deleteArt={() => deleteArt(item.id)}
//         youLoveArt={() => youLoveArt(item.id)}
//         />
//       ))}
//     </div>
//   );
// }
// export default GalleryList;

// // and then the individual Items that get rendered in the list 
// // are like this.


// import React from "react"
// import { useState } from "react";
// import './GalleryItem.css'
// const GalleryItem = ({item, youLoveArt, deleteArt}) => {
//     const { url, title, description, likes } = item
   
//     const [showDescription, setShowDescription] = useState(false);
//     const toggleDescription = () => {
//       setShowDescription(!showDescription);
//     };
//     return (
//         <div className="gallery-item-container" data-testid="galleryItem">
//           <div className="title">{title} <button className="delete-button" onClick={deleteArt}>X</button></div>
//           <div
//             data-testid="toggle"
//             className={`gallery-item ${showDescription ? "show-description" : ""}`}
//             onClick={toggleDescription}
//           >
//             {showDescription ? <div className="center" ><p>{description}</p></div> : <img src={url} alt={title} />}
//           </div>
//           <div className="like-container">
//         <button className="like-button" data-testid="like" onClick={youLoveArt}>
//           Love this Art! :blue_heart:
//         </button>
//         </div>
//         <div className="like-counter">
//         <div>{likes} People love this!</div>
//       </div>
//         </div>
//       );
//     };
    
// export default GalleryItem;



// // // ------------ CB PRICES/QTY  ------------ //

// // // function basePrice () {
// // //     const price = 34.99;
// // //     if ()


// // // }
// // import { createStore, applyMiddleware, combineReducers } from 'redux';
// // import createSagaMiddleware from 'redux-saga';
// // import logger from 'redux-logger';

// // import rootReducer from './reducers/_root.reducer'; // imports ./redux/reducers/index.js
// // import rootSaga from './sagas/_root.saga'; // imports ./redux/sagas/index.js
// // import { takeLatest } from 'redux-saga/effects';

// // // ------------ SAGA MIDDLWARE  ------------ //
// // const sagaMiddleware = createSagaMiddleware();

// // // this line creates an array of all of redux middleware you want to use
// // // we don't want a whole ton of console logs in our production code
// // // logger will only be added to your project if your in development mode
// // const middlewareList = process.env.NODE_ENV === 'development' ?
// //   [sagaMiddleware, logger] :
// //   [sagaMiddleware];

// //   // ------------ CAKE BITE LIST  ------------ //
// //   const cakeList = (state = [], action) => {
// //     if (action.type === 'SET_CAKES') {
// //       return action.payload
// //     }
// //     return state;
// //   }

// //   // ------------ CAKE BITE CART  ------------ //
// //   const cart = (state =[], action) => {
// //     if (action.type === 'ADD_TO_CART') {
// //       let newCart = [...state, aciton.payload]
// //       return newCart;
// //     } else if (action.type === 'REMOVE_FROM_CART') {
// //       let newCart = state.filter((el) => {
// //         return el.id !== action.payload
// //       })
// //       return newCart;
// //     }
// //     else if (action.type === 'EMPTY_CART') {
// //       let cartTotal = action.payload;
// //       return cartTotal;
// //     }
// //     return state;
// //   }

// //   // ------------ CART TOTAL  ------------ //
// //   const cartTotal = (state = 0, action) => {
// //     if (action.type === 'ADD_CART_TOTAL') {
// //       let cartTotal = math.round((state + Number(action.payload)) * 100) / 100;
// //       return cartTotal;
// //     } else if (action.type === 'REMOVE_CART_TOTAL') {
// //       let cartTotal = math.round((state - Number(action.payload)) * 100) / 100;
// //       return cartTotal;
// //     } else if (action.type === 'CLEAR_CART_TOTAL') {
// //       let cartTotal = action.payload;
// //       return cartTotal;
// //     }
// //     return state;
// //   }

// //   // ------------ CUSTOMER INFO  ------------ //
// //   const customerInfo = (state = [], action) => {
// //     if (action.type === 'ADD_CUSTOMER') {
// //       let currentCustomer = [action.payload];
// //       return currentCustomer;
// //     } else if (action.type === 'CLEAR_CUSTOMER') {
// //       let cartTotal = action.payload;
// //       return cartTotal;
// //     }
// //     return state;
// //   }

// //   //  ------------ STORE  ------------ //
// // const store = createStore(
// //   combineReducers({
// //   // tells the saga middleware to use the rootReducer
// //   // rootSaga contains all of our other reducers
// //     rootReducer,
// //     cakeList,
// //     cart,
// //     cartTotal,
// //     customerInfo
// //   }),

// // //  ------------ ROOT SAGAS REDUCER  ------------ //  
// // function* rootSaga () {
// //   yield takeLatest('ADD_TO_CART', cart),
// //   yield takeLatest ('SET_CAKES', cakeList)
// //   yield takeLatest('ADD_CART_TOTAL', cartTotal),
// //   yield takeLatest('ADD_CUSTOMER', customerInfo)
// // },
  
// //   // adds all middleware to our project including saga and logger
// //   applyMiddleware(...middlewareList),
// // );

// // // tells the saga middleware to use the rootSaga
// // // rootSaga contains all of our other sagas
// // sagaMiddleware.run(rootSaga);

// // export default store;

// <Route exact path="/shop">
//             <ShopCakeBites />
//           </Route>



