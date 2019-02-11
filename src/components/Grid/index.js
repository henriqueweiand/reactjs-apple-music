import React from 'react';

import { Container } from './styles';

const Grid = ({ children, ...styles }) => <Container {...styles}>{children}</Container>;

export default Grid;
