const singlePropertyIdReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SINGLE_PROPERTY_ID':
            return action.payload;
        default:
            return state;
    }
};
// user will be on the redux state at:
// state.user
export default singlePropertyIdReducer;