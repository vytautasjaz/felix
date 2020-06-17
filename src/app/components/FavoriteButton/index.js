import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';

import content from '../../../content';

import './index.scss';

const FavoriteButton = ({ movieId, isFavorite, toggleFavorite }) => {
  const onClick = () => toggleFavorite(movieId, isFavorite);
  const modeClass = isFavorite ? 'FavoriteButton favorite' : 'FavoriteButton';
  return (
    <button className={modeClass} onClick={onClick}>
      {isFavorite ? 'Remove' : 'Favorite'}
    </button>
  );
};

const enchance = compose (
connect (
  (state, {movieId}) => {
    return {
      isFavorite: content.selectors.isFavoriteById(state, movieId),
    }
  },
  (dispatch) => {
    return {
      toggleFavorite: bindActionCreators(
        content.actions.toggleFavorite,
        dispatch
      ),
    };
  }
)
)
// function mapStateToProps({ content: { favorites } }) {
//   return {
//     isFavorite: content.selectors.isFavoriteById(state, movieId),
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     toggleFavorite: bindActionCreators(
//       content.actions.toggleFavorite,
//       dispatch
//     ),
//   };
// }

export default enchance(FavoriteButton);
