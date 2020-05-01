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
// This stores all of the properties currently listed on the site for admins only to see. 