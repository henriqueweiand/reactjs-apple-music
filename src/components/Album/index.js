import React from 'react';
import PropTypes from 'prop-types';

import Hidden from '~/components/Hidden';
import { Button } from '~/styles/components';
import Grid from '~/components/Grid';

import { Item, Cover, Title, ButtonSpace } from './styles';

const Album = ({ cover, title, qtdSongs, description }) => (
  <Grid
    container
    direction="column"
  >
    <Hidden to="desktop">
      <Grid
        container
        item
      >
        <Cover>
          <img src={cover} alt={title} />
        </Cover>
        <Title>{title}</Title>
      </Grid>

      <Button styles={ButtonSpace}>
        Listen on
        {' '}
        <b>Apple Music</b>
      </Button>

      <Item bar />
      <Item notes>Editor`s notes</Item>

      <Item description>
        {description}
      </Item>
    </Hidden>

    <Hidden to="mobile">
      <Item>
        <img src={cover} alt={title} />
      </Item>
      <Item song>{qtdSongs} Songs</Item>
      <Item bar />
      <Item notes>Editor note`s</Item>
      <Item description>
        {description}
      </Item>
    </Hidden>
  </Grid>
);

Album.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  qtdSongs: PropTypes.number,
  description: PropTypes.string,
};

Album.defaultProps = {
  qtdSongs: 0,
  description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
};

export default Album;
