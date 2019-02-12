import React from 'react';
import PropTypes from 'prop-types';

import Grid from '~/components/Grid';

const List = ({ children, data, component: Component }) => (
  <Grid direction="column" item>
    {children}
    {data.map(item => (
      <Component key={item.key} data={item} />
    ))}
  </Grid>
);

List.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  component: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

List.defaultProps = {
  children: [],
};

export default List;
