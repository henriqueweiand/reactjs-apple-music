import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import Grid from '~/components/Grid';
import Album from '~/components/Album';
import Hidden from '~/components/Hidden';
import List from '~/components/List';

import ListMusicStruct from '../ListMusicStruct';

import { Container, Title, ButtonSpace } from './styles';
import { Button } from '~/styles/components';

class MediaList extends Component {
  handleAlbum = () => {
    const { album } = this.props;

    return album.map(item => (
      <Container key={item.collectionId}>
        <Grid container direction="row" justify="space-between" wrap="wrap">
          <Grid desktop="30" mobile="100">
            <Album
              cover={item.artworkUrl100}
              title={item.collectionName}
              qtdSongs={12}
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
    ));
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

export default connect(mapStateToProps)(MediaList);
