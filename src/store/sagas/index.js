import { all, takeLatest } from 'redux-saga/effects';

import { Types as AlbumsTypes } from '~/store/ducks/album';

import { getAlbum } from './album';

export default function* rootSaga() {
  yield all([takeLatest(AlbumsTypes.GET_REQUEST, getAlbum)]);
}
