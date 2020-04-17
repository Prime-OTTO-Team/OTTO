const adminPropertyHistoryReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ADMIN_PROPERTY_HISTORY':
            return action.payload;
        case 'UNSET_ADMIN_PROPERTY_HISTORY':
            return [];
        default:
            return state;
    }
};
export default adminPropertyHistoryReducer;