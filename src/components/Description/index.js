import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Description = ({ data }) => <Container>{data}</Container>;

Description.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Description;
