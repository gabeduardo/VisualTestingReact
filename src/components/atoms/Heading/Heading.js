import React from 'react';
import PropTypes from 'prop-types';

export default function Heading({ children }) {
  return <h2>{children}</h2>;
}

Heading.propTypes = {
  children: PropTypes.element.isRequired,
};
