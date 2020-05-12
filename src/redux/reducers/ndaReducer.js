const ndaReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_NDA':
            return action.payload;
   
        default:
            return state;
    }
};

export default ndaReducer;