import React from 'react';

import { Label, Value, List } from './styles';
import Grid from '~/components/Grid';

const ListDataStruct = ({ data }) => (
  <Grid style={List}>
    <Label>{data.label}</Label>
    <Value>{data.value}</Value>
  </Grid>
);

export default ListDataStruct;
