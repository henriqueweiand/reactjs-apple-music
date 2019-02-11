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

import { Creators as TrackActions } from '~/store/ducks/track';

class MediaList extends Component {
  static propTypes = {
    getAlbumRequest: PropTypes.func.isRequired,
  };

  componentWillReceiveProps(props) {
    const { getAlbumRequest } = this.props;
    if (props.artist.artistId) {
      getAlbumRequest(props.artist.artistId);
    }
  }

  shouldComponentUpdate(newProps) {
    return newProps.artist.artistId !== '';
  }

  renderList = () => (
    <Container>
      <Grid container direction="row" justify="space-between" wrap="wrap">
        <Grid desktop="30" mobile="100">
          <Album />
        </Grid>
        <Grid desktop="65" mobile="100">

          <Hidden to="mobile">
            <Title>Lil Wayner: Next Steps</Title>
            <Button style={ButtonSpace}>
              Listen on
              {' '}
              <b>Apple Store</b>
            </Button>
          </Hidden>

          <List
            component={ListMusicStruct}
            data={[
              {
                cover:
                  'http://3.bp.blogspot.com/-uW82HnOSESs/U0h3alfuC1I/AAAAAAAAo6Y/B3K1iCLV4uw/s1600/edsheeranx.jpg',
                title: 'Origin',
                artist: 'New Orleans, LA',
                time: '4:20',
              },
              {
                cover:
                  'http://3.bp.blogspot.com/-uW82HnOSESs/U0h3alfuC1I/AAAAAAAAo6Y/B3K1iCLV4uw/s1600/edsheeranx.jpg',
                title: 'Genre',
                artist: 'Hip-Hop/Rap',
                time: '4:20',
              },
              {
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
  )

  render() {
    const { album } = this.props;
    return (
      <Fragment>
        {
          album.loading ? (
            <div>Carregando</div>
          ) : this.renderList()
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  artist: state.artist,
  album: state.album,
  track: state.track,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...TrackActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MediaList);
