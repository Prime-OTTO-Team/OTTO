const detailedPropertyReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DETAILED_PROPERTY':
            return action.payload;
        default:
            return state;
    }
};
export default detailedPropertyReducer;
// This stores more detailed information on a property after a user has signed an nda
