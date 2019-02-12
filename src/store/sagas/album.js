import { put, call } from 'redux-saga/effects';
import api from '~/services/api';

import { Creators as AlbumActions } from '~/store/ducks/album';
import { Creators as SongActions } from '~/store/ducks/song';

export function* getAlbum(action) {
  try {
    const { id } = action.payload;
    const response = yield call(api.get, `lookup?id=${id}&entity=album&limit=2`); // fix limit 2 para nao ficar uma tela muito grande
    const albums = response.data.results.filter(item => item.wrapperType === 'collection');

    yield albums.map(album => put(SongActions.getSongRequest(album.collectionId)));
    yield put(AlbumActions.getAlbumSuccess(albums));
  } catch (err) {
    console.tron.log(err);
  }
}
