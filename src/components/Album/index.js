import React from 'react';

import Hidden from '~/components/Hidden';
import { Button } from '~/styles/components';
import Grid from '~/components/Grid';

import { Item, Cover, Title, ButtonSpace } from './styles';

const Album = () => (
  <Grid
    container
    direction="column"
  >
    <Hidden to="desktop">
      <Grid
        container
      >
        <Cover>Capa</Cover>
        <Title>Lil Wayner: Next Steps</Title>
      </Grid>

      <Button styles={ButtonSpace}>
        Listen on
        {' '}
        <b>Apple Music</b>
      </Button>

      <Item bar />
      <Item notes>Editor`s notes</Item>

      <Item description>
        When Lil Wayne debuted as a 12-year-old kid on the B.G.’z 1995 album True Story, it wasn’t
      exactly clear that he’d become one of the best rappers of his generation.
      </Item>
    </Hidden>

    <Hidden to="mobile">
      <Item cover>Album</Item>
      <Item song>22 Songs </Item>
      <Item bar />
      <Item notes>Editor note`s</Item>
      <Item description>
        When Lil Wayne debuted as a 12-year-old kid on the B.G.’z 1995 album True Story, it wasn’t
    exactly clear that he’d become one of the best rappers of his generation.
      </Item>
    </Hidden>
  </Grid>
);

export default Album;
