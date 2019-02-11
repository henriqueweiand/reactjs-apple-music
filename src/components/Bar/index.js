import React from 'react';

import { Container, Title } from './styles';

const Bar = ({ children, style }) => (
  <Container style={style}>{children && <Title>{children}</Title>}</Container>
);

export default Bar;
