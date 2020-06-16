import * as types from "../types";

const DEFAULT_CONTET_STATE = {
    favorites: [],
  };
  
  function content(state = DEFAULT_CONTET_STATE, action) {
    switch (action.type) {
      case types.TOGGLE_FAVORITE: {
        if (!state.favorites.includes(action.id)) {
          return { ...state, favorites: [...state.favorites, action.id] };
        } else {
          return {
            ...state,
            favorites: state.favorites.filter((id) => id !== action.id),
          };
        }
      }
      default:
        return state;
    }
  }
  
  export default content;