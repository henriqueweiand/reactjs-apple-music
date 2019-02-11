import React, { Component } from 'react';

import Grid from '~/components/Grid';
import Header from '~/components/Header';
import About from './components/About';
import MediaList from './components/MediaList';
import FeaturedArtist from './components/FeaturedArtist';

import imageSrc from '~/images/lilwayne.png';
import { Image } from './styles';

class Main extends Component {
  state = {};

  render() {
    return (
      <Grid container item direction="column">
        <Header>
          <Image src={imageSrc} alt="Lyl Wayne" />
        </Header>
        <About />
        <MediaList />
        <FeaturedArtist />
      </Grid>
    );
  }
}
export default Main;
