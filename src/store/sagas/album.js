import { put, call } from 'redux-saga/effects';
import api from '~/services/api';

import { Creators as AlbumActions } from '~/store/ducks/album';

export function* getAlbum(action) {
  try {
    const { id } = action.payload;
    const response = yield call(api.get, `lookup?id=${id}&entity=album&limit=2`);
    const { results } = response.data;

    yield put(AlbumActions.getAlbumSuccess(results));
  } catch (err) {
    console.tron.log(err);
    // yield call(toastr.error, 'Erro', 'Não foi possivel obter a lista de Album');
  }
}
