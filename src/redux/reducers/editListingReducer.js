const editListingReducer = (state = [], action) => {
    switch (action.type) {
        case 'EDIT_LISTING':
            return action.payload;
        case 'UNEDIT_LISTING':
            return {};
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default editListingReducer;