import { put, call } from 'redux-saga/effects';
import api from '~/services/api';

import { Creators as ArtistActions } from '~/store/ducks/artist';

export function* getArtist(action) {
  try {
    const { id } = action.payload;
    const response = yield call(api.get, `lookup?id=${id}`);
    const { results } = response.data;

    yield put(ArtistActions.getArtistSuccess(results[0]));
  } catch (err) {
    console.tron.log(err);
    // yield call(toastr.error, 'Erro', 'Não foi possivel obter a lista de Album');
  }
}
