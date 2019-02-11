import React from 'react';

import { FeaturedArtist, Label, FeaturedArtistList, Item, List, ItemList } from './styles';
import Grid from '~/components/Grid';

const ListMusicStruct = ({ data }) => (
  <Grid direction="column" container styles={FeaturedArtist}>
    <Label>Featured Artists</Label>

    <Grid item container styles={FeaturedArtistList}>
      <Grid
        container
        direction="column"
        alingItem="center"
        alingContent="center"
        styles={Item}
      >
        <List>
          <ItemList cover />
          <ItemList songName>
            Title
          </ItemList>
          <ItemList category>
            Categoria
          </ItemList>
        </List>
      </Grid>
    </Grid>
  </Grid>
);

export default ListMusicStruct;
