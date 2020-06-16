const DEFAULT_AUTHENTICATION_STATE = {
    token: localStorage.getItem('token'),
  };
  
  function authentication(state = DEFAULT_AUTHENTICATION_STATE, action) {
    switch (action.type) {
      case 'SET_TOKEN': {
        return { ...state, token: action.token };
      }
      case 'REMOVE_TOKEN': {
        return { ...state, token: null };
      }
      default:
        return state;
    }
  }
  
  export default authentication; 
