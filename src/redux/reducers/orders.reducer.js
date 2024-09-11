

// Reducer
const orderReducer = (state= [], action) => {
    switch (action.type) {
        case 'PLACE_ORDER_REQUEST':
            return [...state,{ ...action.payload, status: 'hold on, pending'}];
        
        case 'PLACE_ORDER_SUCCESS':
            return state.map(order =>
                order.id === action.payload.id 
                ? { ...order, status: 'yay success!'} : order
            );
            // {
            //     ...state,
            //     orderStatus: 'success',
            // };
        
        case 'PLACE_ORDER_FAILURE':
            return state.map(order =>
                order.id === action.payload.id
                ? { ...order, status: 'bummer, failed', error: action.payload.error }
                : order
            );
            // {
            //     ...state,
            //     orderStatus: 'failed',
            //     error: action.payload,
            // };

            case 'CLEAR_ORDERS':
                // CLEARS ALL ORDERS //
                return [];
        default:
            return state;
    }
}
export default orderReducer;