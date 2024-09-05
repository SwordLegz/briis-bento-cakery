const shopReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_CAKEBITES":
            return action.payload;
    }
};

export default shopReducer;