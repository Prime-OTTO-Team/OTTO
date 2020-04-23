const searchResultReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SEARCH_RESULT':
            return action.payload;
        case 'UNSET_SEARCH_RESULT':
            return [];
        default:
            return state;
    }
};

export default searchResultReducer;