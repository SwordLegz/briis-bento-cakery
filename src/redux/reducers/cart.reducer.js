
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CAKEBITE_TO_CART':
      // Add new cakebite to the cart
      return [...state, action.payload];

    case 'REMOVE_FROM_CART':
      // Ensure the action payload is the index to remove
      const indexToRemove = action.payload;

      // Debugging log
      console.log('Attempting to remove item at index:', indexToRemove);
      console.log('Current cart items:', state);
      
      // Validate index
      if (indexToRemove < 0 || indexToRemove >= state.length) {
        console.error('Invalid index:', indexToRemove);
        return state; // Return unchanged state if index is invalid
      }

      // Create a new array excluding the item at the specified index
      return [
        ...state.slice(0, indexToRemove),
        ...state.slice(indexToRemove + 1)
      ];

    case 'EMPTY_CART':
      // Empty the cart
      return [];
      
    default:
      return state;
  }
};

export default cartReducer;




// // ----------- CART REDUCER ----------- //
// const cartReducer = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_CAKEBITE_TO_CART':
//       // Add new cakebite to the cart
//       return [...state, action.payload];
//     case 'REMOVE_FROM_CART':
//       // Remove cakebite from the cart by ID
//       const indexToRemove = state.findIndex(item => item.id === action.payload);
//     console.log('Removing item at index:', indexToRemove);
//     console.log('Item to remove:', state[indexToRemove]);

//     if (indexToRemove === - 1) {
//       return state;
//     }
//       return [
//         ...state.slice(0, indexToRemove),
//         ...state.slice(indexToRemove + 1)
//       ];
//       // return state.filter(item => item.id !== action.payload);
//     case 'EMPTY_CART':
//       // Empty the cart
//       return [];
//     default:
//       return state;
//   }
// };
// export default cartReducer;


//   // ------------ OLD CODE MIGHT WORK?? ------------ //