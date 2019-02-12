import React from 'react';
import PropTypes from 'prop-types';

import {
  Title, Artist, List, Cover, Time,
} from './styles';
import Grid from '~/components/Grid';

const ListMusicStruct = ({ data }) => {
  const TimeMinutes = String(data.trackTimeMillis / 60000).substring(0, 4);
  return (
    <Grid container>
      <Cover>
        <img src={data.artworkUrl30} alt={data.trackName} />
      </Cover>

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
          <Title>{data.trackName}</Title>
          <Artist>{data.artistName}</Artist>
        </Grid>
        <Time>{TimeMinutes}</Time>
      </Grid>
    </Grid>
  );
};

ListMusicStruct.propTypes = {
  data: PropTypes.shape({
    trackName: PropTypes.string,
    artistName: PropTypes.string,
    trackTimeMillis: PropTypes.number,
  }).isRequired,
};

export default ListMusicStruct;
