import React from 'react';

import Grid from '~/components/Grid';

const List = ({ children, data, component: Component }) => (
  <Grid direction="column" item>
    {children}
    {data.map(item => (
      <Component key={item.key} data={item} />
    ))}
  </Grid>
);

export default List;
