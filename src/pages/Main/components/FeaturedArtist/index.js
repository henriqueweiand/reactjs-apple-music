import React from 'react';

import { FeaturedArtist, Label, FeaturedArtistList, Item, List, ItemList } from './styles';
import Grid from '~/components/Grid';

const ListMusicStruct = ({ data }) => (
  <Grid direction="column" container style={FeaturedArtist}>
    <Label>Featured Artists</Label>

    <Grid item container style={FeaturedArtistList}>
      <Grid
        container
        direction="column"
        alingItem="center"
        alingContent="center"
        style={Item}
      >
        <List>
          <ItemList cover />
          <ItemList title>
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
