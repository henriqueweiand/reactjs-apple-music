import React from 'react';

// import { Container } from './styles';
import Grid from '~/components/Grid';

const List = ({ children, data, component: Component }) => (
  <Grid direction="column" item>
    {children}
    {data.map(item => (
      <Component data={item} />
    ))}
  </Grid>
);

export default List;
