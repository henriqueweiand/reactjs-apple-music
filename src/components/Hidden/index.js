import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Hidden = ({ children, to }) => <Container to={to}>{children}</Container>;

Hidden.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  to: PropTypes.string.isRequired,
};

export default Hidden;
