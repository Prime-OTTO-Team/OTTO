

const userInterestsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_INTERESTS':
        return action.payload;
      case 'UPDATE_INTERESTS':
        return [];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default userInterestsReducer;