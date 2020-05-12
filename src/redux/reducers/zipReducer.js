
const zipReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ZIP_SEARCH':
            return action.payload;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default zipReducer;
// This stores the zipcode 