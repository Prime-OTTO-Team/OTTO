const accountFavoriteReducer= (state = [], action) => {
    switch (action.type) {
        case 'SET_ACCOUNT_FAVORITE':
            return action.payload;
        case 'UNSET_ACCOUNT_FAVORITE':
            return [];
        default:
            return state;
    }
};
export default accountFavoriteReducer;
// This stores the data for the favorited properties for a user. 