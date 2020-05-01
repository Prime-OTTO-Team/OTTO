const propertyReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROPERTY':
            return action.payload;
        default:
            return state;
    }
};
export default propertyReducer;
// Holds a list of properties to be displayed on landing page and for searching