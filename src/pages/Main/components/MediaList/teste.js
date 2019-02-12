import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import List from '~/components/List';

import ListMusicStruct from '../ListMusicStruct';

import { Creators as SongActions } from '~/store/ducks/song';

const Teste = ({ song, collectionId }) => {
  const currentAlbumSongs = song.filter(item => item.collectionId === collectionId);
  return (
    <List
      indexs={{ key: 'trackId' }}
      component={ListMusicStruct}
      data={currentAlbumSongs}
    />
  );
};

const mapStateToProps = state => ({
  song: state.song.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...SongActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Teste);
