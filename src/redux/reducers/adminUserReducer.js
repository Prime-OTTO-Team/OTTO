const adminUserReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ADMIN_APPROVED_USER':
            return action.payload;
        case 'UNSET_ADMIN_APROVED_USER':
            return [];
        default:
            return state;
    }
};
export default adminUserReducer;
//This stores all the approved users for the admin to see. 