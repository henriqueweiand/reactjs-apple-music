import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Grid = ({ children, ...styles }) => <Container {...styles}>{children}</Container>;

Grid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  styles: PropTypes.arrayOf(PropTypes.string),
};

Grid.defaultProps = {
  styles: [],
};

export default Grid;
