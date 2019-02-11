import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '~/components/Grid';
import Header from '~/components/Header';
import About from './components/About';
import MediaList from './components/MediaList';
import FeaturedArtist from './components/FeaturedArtist';

import imageSrc from '~/images/lilwayne.png';
import { Image } from './styles';

import { Creators as ArtistActions } from '~/store/ducks/artist';

class Main extends Component {
  state = {
    id: 5869117, // id do lil wayne
  }

  static propTypes = {
    getArtistRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getArtistRequest } = this.props;
    const { id } = this.state;

    getArtistRequest(id);
  }

  render() {
    const { artist } = this.props.artist;
    console.log(artist);

    return (
      <Grid container item direction="column">
        <Header>
          <Image src={imageSrc} />
        </Header>

        <About />
        <MediaList />

        <FeaturedArtist />
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  artist: state.artist,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...ArtistActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
