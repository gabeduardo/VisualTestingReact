import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card({ children }) {
  return <div className="card">{children}</div>;
}

Card.propTypes = {
  children: PropTypes.element.isRequired,
};
