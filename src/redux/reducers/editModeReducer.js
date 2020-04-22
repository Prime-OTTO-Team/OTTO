const editModeReducer = (state = false, action) => {
    switch (action.type) {
        case 'EDIT_MODE':
            return true
        case 'UNEDIT_MODE':
            return false;
        default:
            return false
    }
};

// user will be on the redux state at:
// state.user
export default editModeReducer;