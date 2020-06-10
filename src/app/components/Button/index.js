import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import './index.scss';

function Button({ children, size, status, id, mode, ...props }) {
  const sizeClass = { small: 'button--small', large: 'button--large' }[size];
  const Tag = props.to ? Link : props.href ? 'a' : 'button';
  const modeClass = mode === 'outline' ? 'Button favorite' : 'Button ';

  return (
    <Tag
      className={`${sizeClass} ${modeClass} ${status}`}
      {...props}
      onClick={id}
    >
      {children}
    </Tag>
  );
}

function mapStateToProps({ favorites }) {
  return {
    allFavorites: favorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleFavorite: (id) => dispatch({ type: "TOGGLE_FAVORITE", id }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);
