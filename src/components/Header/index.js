import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Header = ({ children }) => <Container>{children}</Container>;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

Header.defaultProps = {
  children: [],
};

export default Header;
