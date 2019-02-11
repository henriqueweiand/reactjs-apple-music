import { all, takeLatest } from 'redux-saga/effects';

import { Types as ArtistTypes } from '~/store/ducks/artist';
import { Types as AlbumsTypes } from '~/store/ducks/album';

import { getArtist } from './artist';
import { getAlbum } from './album';

export default function* rootSaga() {
  yield all([takeLatest(ArtistTypes.GET_REQUEST, getArtist)]);
  yield all([takeLatest(AlbumsTypes.GET_REQUEST, getAlbum)]);
}
