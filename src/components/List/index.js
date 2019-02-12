import React from 'react';
import PropTypes from 'prop-types';

import Grid from '~/components/Grid';

const List = ({ children, indexs, data, component: Component }) => {
  const indexKey = indexs.key ? indexs.key : 'key';

  return (
    <Grid direction="column" item>
      {children}
      {data.map(item => (
        <Component key={item[indexKey]} data={item} />
      ))}
    </Grid>
  );
};

List.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  component: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape()),
  indexs: PropTypes.shape(),
};

List.defaultProps = {
  children: [],
  data: [],
  indexs: {},
};

export default List;
