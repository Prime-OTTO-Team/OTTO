const adminAdminReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ADMIN_APPROVED_ADMIN':
            return action.payload;
        case 'UNSET_ADMIN_APROVED_ADMIN':
            return [];
        default:
            return state;
    }
};
export default adminAdminReducer;