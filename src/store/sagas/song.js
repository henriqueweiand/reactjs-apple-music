import { put, call } from 'redux-saga/effects';
import api from '~/services/api';

import { Creators as SongActions } from '~/store/ducks/song';

export function* getSong(action) {
  try {
    const { id } = action.payload;
    const response = yield call(api.get, `lookup?id=${id}&entity=song`);
    const { results } = response.data;

    yield put(SongActions.getSongSuccess(results.filter(item => item.wrapperType === 'track')));
  } catch (err) {
    console.tron.log(err);
  }
}
