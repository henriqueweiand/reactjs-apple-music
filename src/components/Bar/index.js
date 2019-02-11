import React from 'react';

import { Container, Title } from './styles';

const Bar = ({ children, styles }) => (
  <Container styles={styles}>{children && <Title>{children}</Title>}</Container>
);

export default Bar;
