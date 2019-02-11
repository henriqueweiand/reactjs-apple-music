import { put, select, call } from 'redux-saga/effects';

import { Creators as AlbumActions } from '~/store/ducks/album';

export function* getAlbum() {
  try {
    // yield put(AlbumActions.getAlbumSuccess(Album));
  } catch (err) {
    // yield call(toastr.error, 'Erro', 'Não foi possivel obter a lista de Album');
  }
}
