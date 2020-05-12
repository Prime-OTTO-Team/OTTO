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
export default editModeReducer;
// This reducer sets it to be edit mode when brought back to the add listing page. 