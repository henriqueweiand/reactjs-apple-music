import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '~/components/Grid';
import Album from '~/components/Album';
import Hidden from '~/components/Hidden';
import Teste from './teste';

// import List from '~/components/List';
// import ListMusicStruct from '../ListMusicStruct';

import { Container, Title, ButtonSpace } from './styles';
import { Button } from '~/styles/components';

import { Creators as AlbumActions } from '~/store/ducks/album';

class MediaList extends Component {
  handleAlbum = () => {
    const { album } = this.props;

    return album.map((item) => {
      return (
        <Container key={item.collectionId}>
          <Grid container direction="row" justify="space-between" wrap="wrap">
            <Grid desktop="30" mobile="100">
              <Album
                cover={item.artworkUrl100}
                title={item.collectionName}
                qtdSongs={1}
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

              {<Teste collectionId={item.collectionId} />}
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
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...AlbumActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MediaList);
