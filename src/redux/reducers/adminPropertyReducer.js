const adminPropertyReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ADMIN_PROPERTY':
            return action.payload;
        case 'UNSET_ADMIN_PROPERTY':
            return [];
        default:
            return state;
    }
};
export default adminPropertyReducer;