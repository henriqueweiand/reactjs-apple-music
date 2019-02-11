import React, { Component } from 'react';

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
import { Creators as SongActions } from '~/store/ducks/song';

class MediaList extends Component {
  componentWillMount() {
    const { artistId, getAlbumRequest } = this.props;
    getAlbumRequest(artistId);
  }

  render() {
    const { album } = this.props;

    return (
      <Container>
        <Grid container direction="row" justify="space-between" wrap="wrap">
          <Grid desktop="30" mobile="100">
            {
              album.loading ? 'Carregando' : <Album />
            }
          </Grid>
          <Grid desktop="65" mobile="100">

            <Hidden to="mobile">
              <Title>Lil Wayner: Next Steps</Title>
              <Button styles={ButtonSpace}>
                Listen on
                {' '}
                <b>Apple Store</b>
              </Button>
            </Hidden>

            <List
              component={ListMusicStruct}
              data={[
                {
                  key: 1,
                  cover:
                  'http://3.bp.blogspot.com/-uW82HnOSESs/U0h3alfuC1I/AAAAAAAAo6Y/B3K1iCLV4uw/s1600/edsheeranx.jpg',
                  title: 'Origin',
                  artist: 'New Orleans, LA',
                  time: '4:20',
                },
                {
                  key: 2,
                  cover:
                  'http://3.bp.blogspot.com/-uW82HnOSESs/U0h3alfuC1I/AAAAAAAAo6Y/B3K1iCLV4uw/s1600/edsheeranx.jpg',
                  title: 'Genre',
                  artist: 'Hip-Hop/Rap',
                  time: '4:20',
                },
                {
                  key: 3,
                  cover:
                    'http://3.bp.blogspot.com/-uW82HnOSESs/U0h3alfuC1I/AAAAAAAAo6Y/B3K1iCLV4uw/s1600/edsheeranx.jpg',
                  title: 'Born',
                  artist: 'Set 27, 1982',
                  time: '4:20',
                },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  album: state.album,
  song: state.song,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...AlbumActions,
  ...SongActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MediaList);
