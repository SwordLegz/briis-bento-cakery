
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_CART_ITEMS":
      return action.payload;
      
    case 'ADD_PENDING_TO_CART':
      // Add new cakebite to the cart
      return [action.payload];

    // -------- EDIT CAKEBITE IN CART -------- //

    case 'EDIT_ITEM':
      return state.map(item =>
        item.id === action.payload.id ? {...item, quantity: action.payload.quantity, price: action.payload.price } : item
      );

    // -------- EDIT CAKEBITE IN CART -------- //


    // -------- DELETE CAKEBITE IN CART -------- //
    case 'REMOVE_FROM_CART':
      return state.filter((_, index) => index !== action.payload);
      // console.log('U tryna delete this er wut?:', )

    case 'EMPTY_CART':
      // Empty the cart
      return [];
      
    default:
      return state;
  }
};
// -------- END DELETE CAKEBITE IN CART -------- //

export default cartReducer;




// ------------ OLD CODE MIGHT WORK?? ------------ //