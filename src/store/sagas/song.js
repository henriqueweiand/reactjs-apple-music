import { put, select, call } from 'redux-saga/effects';

import { Creators as SongActions } from '~/store/ducks/song';

export function* getSong() {
  try {
    // https://itunes.apple.com/lookup?id=459904774&entity=song&limit=2
    // yield put(AlbumActions.getAlbumSuccess(Album));
  } catch (err) {
    // yield call(toastr.error, 'Erro', 'Não foi possivel obter a lista de Album');
  }
}
