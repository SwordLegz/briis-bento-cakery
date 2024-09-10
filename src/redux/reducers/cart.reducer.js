const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CAKEBITE_TO_CART':
      // Add new cakebite to the cart
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      // Remove cakebite from the cart by ID
      return state.filter(item => item.id !== action.payload);
    case 'EMPTY_CART':
      // Empty the cart
      return [];
    default:
      return state;
  }
};
export default cartReducer;


  // ------------ OLD CODE MIGHT WORK?? ------------ //

  // if (action.type === 'ADD_TO_CART') {
    //   let newCart = [...state, action.payload]
    //   return newCart;
    // } else 
    // if (action.type === 'REMOVE_FROM_CART') {
    //   let newCart = state.filter((el) => {
    //     return el.id !== action.payload
    //   })
    //   return newCart;
    // }
    // else if (action.type === 'EMPTY_CART') {
    //   let cartTotal = action.payload;
    //   return cartTotal;
    // } else
    //  if (action.type === 'ADD_CAKEBITE_TO_CART') {
    //     let addedCakebite = [...state, [action.payload]]
    //     return addedCakebite;
    // }
    // return state;