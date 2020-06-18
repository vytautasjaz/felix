import * as types from '../../content/types';

const DEFAULT_CONTET_STATE = {
  favorites: [],
};

const addFavorite = (state, action) => ({
  ...state,
  favorites: [...state.favorites, action.id],
});
const removeFavorite = (state, action) => ({
  ...state,
  favorites: state.favorites.filter((id) => id !== action.id),
});

function contentReducer(state = DEFAULT_CONTET_STATE, action) {
  switch (action.type) {
    case types.ADD_FAVORITE:
      return addFavorite(state, action);
    case types.REMOVE_FAVORITE:
      return removeFavorite(state, action);
    default:
      return state;
  }
}

export default contentReducer;
