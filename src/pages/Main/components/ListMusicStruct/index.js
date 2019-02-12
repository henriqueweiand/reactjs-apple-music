import React from 'react';
import PropTypes from 'prop-types';

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
      styles={List}
    >
      <Grid direction="column">
        <Title>{data.title}</Title>
        <Artist>{data.artist}</Artist>
      </Grid>
      <Time>{data.time}</Time>
    </Grid>
  </Grid>
);

ListMusicStruct.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    artist: PropTypes.string,
  }).isRequired,
};

export default ListMusicStruct;
