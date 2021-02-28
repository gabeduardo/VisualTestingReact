import React from 'react';
import PropTypes from 'prop-types';

export default function Text({ children }) {
  return <span>{children}</span>;
}

Text.propTypes = {
  children: PropTypes.element.isRequired,
};
