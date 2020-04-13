const loginMode = (state = true, action) => {
    switch (action.type) {
      case 'LOGIN_REGISTER_MODAL_OPEN':
        return action.payload;
      default:
        return state;
    }
  };

// loginMode will be on the redux state at:
// state.loginMode
  export default loginMode;