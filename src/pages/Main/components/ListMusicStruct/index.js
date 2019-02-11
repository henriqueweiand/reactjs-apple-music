import React from 'react';

import {
  Title, Artist, List, Cover, Time,
} from './styles';
import Grid from '~/components/Grid';

const ListMusicStruct = ({ data }) => (
  <Grid container>
    <Cover />

    <Grid
      container
      item
      direction="row"
      justify="space-between"
      alignContent="center"
      alignItems="center"
      style={List}
    >
      <Grid direction="column">
        <Title>{data.title}</Title>
        <Artist>{data.artist}</Artist>
      </Grid>
      <Time>{data.time}</Time>
    </Grid>
  </Grid>
);

export default ListMusicStruct;
