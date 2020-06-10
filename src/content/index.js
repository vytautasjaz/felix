const DEFAULT_CONTET_STATE = {
  favorites: [],
  token: localStorage.getItem('token'),
};

function contentReducer(state = DEFAULT_CONTET_STATE, action) {
  switch (action.type) {
    case 'TOGGLE_FAVORITE': {
      if (!state.favorites.includes(action.id)) {
        return { ...state, favorites: [...state.favorites, action.id] };
      } else {
        return {
          ...state,
          favorites: state.favorites.filter((id) => id !== action.id),
        };
      }
    }
    case 'SET_TOKEN': {
      return { ...state, token: action.token };
    }
    default:
      return state;
  }
}

export default contentReducer;
