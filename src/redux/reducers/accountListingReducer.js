const accountListingReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ACCOUNT_LISTING':
            return action.payload;
        case 'UNSET_ACCOUNT_LISTING':
            return [];
        default:
            return state;
    }
};
export default accountListingReducer;
// This stores the list of properties that a user has posted 