const adminUserReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ADMIN_USER':
            return action.payload;
        case 'UNSET_ADMIN_USER':
            return [];
        default:
            return state;
    }
};
export default adminUserReducer;