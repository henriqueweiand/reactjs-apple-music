import React from 'react';
import PropTypes from 'prop-types';

import { Label, Value, List } from './styles';
import Grid from '~/components/Grid';

const ListDataStruct = ({ data }) => (
  <Grid styles={List}>
    <Label>{data.label}</Label>
    <Value>{data.value}</Value>
  </Grid>
);

ListDataStruct.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};

export default ListDataStruct;
