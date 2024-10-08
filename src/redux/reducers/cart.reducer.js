
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CART_ITEMS':
      return action.payload;

    // -------- ADD CAKEBITE TO PENDING CART -------- //
    case 'ADD_PENDING_TO_CART':
      // Add new cakebite to the cart
      return action.payload;

    // -------- EDIT CAKEBITE IN CART -------- //
    case 'EDIT_ITEM':
      return state.map(item =>
        item.id === action.payload.id 
        ? { ...item, quantity: action.payload.quantity, price: action.payload.price } 
        : item
      );

    // -------- DELETE CAKEBITE IN CART -------- //
    case 'REMOVE_ITEM_FROM_CART':
      return state.filter(item => item.id !== action.payload);

    case 'EMPTY_CART':
      // Empty the cart
      return [];
      
    default:
      return state;
  }
};
// -------- END DELETE CAKEBITE IN CART -------- //

export default cartReducer;
