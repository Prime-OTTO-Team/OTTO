
const userFavoritesReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_FAVORITES':
        return action.payload;
      case 'UPDATE_FAVORITES':
        return [];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default userFavoritesReducer;