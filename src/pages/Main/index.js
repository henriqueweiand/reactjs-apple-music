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
import { Creators as AlbumActions } from '~/store/ducks/album';

class Main extends Component {
  state = {
    id: 5869117, // id do lil wayne
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    getArtistRequest: PropTypes.func.isRequired,
    getAlbumRequest: PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { getArtistRequest, getAlbumRequest } = this.props;
    const { id } = this.state;

    getArtistRequest(id);
    getAlbumRequest(id);
  }

  render() {
    const { loading } = this.props;

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
  loading: state.album.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...ArtistActions,
  ...AlbumActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
