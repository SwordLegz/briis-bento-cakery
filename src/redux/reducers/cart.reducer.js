
// ----------- CART REDUCER ----------- //
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