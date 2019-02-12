import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '~/components/Grid';
import Album from '~/components/Album';
import Hidden from '~/components/Hidden';
import List from '~/components/List';
import ListMusicStruct from '../ListMusicStruct';

import { Container, Title, ButtonSpace } from './styles';
import { Button } from '~/styles/components';

import { Creators as AlbumActions } from '~/store/ducks/album';

class MediaList extends Component {
  static propTypes = {
    album: PropTypes.arrayOf(PropTypes.shape({
      artworkUrl100: PropTypes.string,
      collectionName: PropTypes.string,
      collectionId: PropTypes.number,
    })),
    song: PropTypes.arrayOf(PropTypes.shape({})),
  };

  static defaultProps = {
    album: [],
    song: [],
  };

  handleAlbum = () => {
    const { album, song } = this.props;

    return album.map((item) => {
      const currentAlbumSongs = song.filter(
        songItem => songItem.collectionId === item.collectionId,
      );

      return (
        <Container key={item.collectionId}>
          <Grid container direction="row" justify="space-between" wrap="wrap">
            <Grid desktop="30" mobile="100">
              <Album
                cover={item.artworkUrl100}
                title={item.collectionName}
                qtdSongs={currentAlbumSongs.length}
              />
            </Grid>
            <Grid desktop="65" mobile="100">
              <Hidden to="mobile">
                <Title>{item.collectionName}</Title>
                <Button styles={ButtonSpace}>
                  Listen on
                  {' '}
                  <b>Apple Store</b>
                </Button>
              </Hidden>

              <List
                indexs={{ key: 'trackId' }}
                component={ListMusicStruct}
                data={currentAlbumSongs}
              />
            </Grid>
          </Grid>
        </Container>
      );
    });
  }

  render() {
    return (
      <Fragment>
        {this.handleAlbum()}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  album: state.album.data,
  song: state.song.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...AlbumActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MediaList);
