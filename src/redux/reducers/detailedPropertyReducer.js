const detailedPropertyReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DETAILED_PROPERTY':
            return action.payload;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default detailedPropertyReducer;