import React from 'react';
import { connect } from 'react-redux';
// import { compose, bindActionCreators } from "redux";

import './index.scss';

const FavoriteButton = ({ movieId, allFavorites, toggleFavorite }) => {
  const onClick = () => toggleFavorite(movieId);
  const isFavorite = !!allFavorites && allFavorites.includes(movieId);
  const modeClass = isFavorite ? 'FavoriteButton favorite' : 'FavoriteButton';
  return (
    <button className={modeClass} onClick={onClick}>
      {isFavorite ? 'Remove' : 'Favorite'}
    </button>
  );
};

function mapStateToProps({ content: {favorites} }) {
  return {
    allFavorites: favorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleFavorite: (id) => dispatch({ type: 'TOGGLE_FAVORITE', id }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
