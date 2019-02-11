import React from 'react';

import { Container } from './styles';

const Grid = ({ children, ...style }) => <Container {...style}>{children}</Container>;

export default Grid;
