

// Reducer
function orderReducer(state = initialState, action) {
    switch (action.type) {
        case PLACE_ORDER_REQUEST:
            return {
                ...state,
                orderStatus: 'pending',
                error: null,
            };
        case PLACE_ORDER_SUCCESS:
            return {
                ...state,
                orderStatus: 'success',
            };
        case PLACE_ORDER_FAILURE:
            return {
                ...state,
                orderStatus: 'failed',
                error: action.payload,
            };
        default:
            return state;
    }
}
export default orderReducer;