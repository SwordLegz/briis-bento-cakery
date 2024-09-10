// Action types
export const PLACE_ORDER_REQUEST = 'PLACE_ORDER_REQUEST';
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS';
export const PLACE_ORDER_FAILURE = 'PLACE_ORDER_FAILURE';

// Initial state
const initialState = {
    orderStatus: null,
    error: null,
};

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