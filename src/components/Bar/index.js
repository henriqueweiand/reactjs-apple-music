import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './styles';

const Bar = ({ children, styles }) => (
  <Container styles={styles}>{children && <Title>{children}</Title>}</Container>
);

Bar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  styles: PropTypes.arrayOf(PropTypes.string),
};

Bar.defaultProps = {
  children: [],
  styles: [],
};

export default Bar;
