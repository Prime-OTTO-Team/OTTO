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
export default editListingReducer;
// This stores the property that is to be edited. 