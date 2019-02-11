import React from 'react';

import { Container } from './styles';

const Hidden = ({ children, to }) => <Container to={to}>{children}</Container>;

export default Hidden;
