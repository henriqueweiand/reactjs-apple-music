import { all, takeLatest } from 'redux-saga/effects';

import { Types as ArtistTypes } from '~/store/ducks/artist';
import { Types as AlbumsTypes } from '~/store/ducks/album';
import { Types as FeaturedTypes } from '~/store/ducks/featured';
import { Types as SongTypes } from '~/store/ducks/song';

import { getArtist } from './artist';
import { getAlbum } from './album';
import { getSong } from './song';
import { getFeatured } from './featured';

export default function* rootSaga() {
  yield all([
    takeLatest(ArtistTypes.GET_REQUEST, getArtist),
    takeLatest(AlbumsTypes.GET_REQUEST, getAlbum),
    takeLatest(SongTypes.GET_REQUEST, getSong),
    takeLatest(FeaturedTypes.GET_REQUEST, getFeatured),
  ]);
}
