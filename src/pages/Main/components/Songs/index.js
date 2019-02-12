import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import List from '~/components/List';
import ListMusicStruct from '../ListMusicStruct';

import { Creators as SongActions } from '~/store/ducks/song';

const Songs = ({ song, collectionId }) => {
  const currentAlbumSongs = song.filter(item => item.collectionId === collectionId);
  return (
    <List
      indexs={{ key: 'trackId' }}
      component={ListMusicStruct}
      data={currentAlbumSongs}
    />
  );
};

Songs.propTypes = {
  collectionId: PropTypes.number.isRequired,
  song: PropTypes.arrayOf(PropTypes.shape({
    collectionId: PropTypes.number,
  })).isRequired,
};

const mapStateToProps = state => ({
  song: state.song.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...SongActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Songs);
