import { put, call } from 'redux-saga/effects';
import api from '~/services/api';

import { Creators as ArtistActions } from '~/store/ducks/artist';

export function* getArtist(action) {
  try {
    const { id } = action.payload;
    const response = yield call(api.get, `lookup?id=${id}`);
    const { results } = response.data;

    yield put(
      ArtistActions.getArtistSuccess({
        ...results[0],
        // < Estes dados não estavam diponiveis na API entao deixei fixo
        description:
          'When Lil Wayne debuted as a 12-year-old kid on the B.G.’z 1995 album True Story, it wasn’t exactly clear that he’d become one of the best rappers of his generation. It’s not just that he’s clever or funny—it’s the way his style manages to balance classic, boast-driven rap with the kind of wild metaphors and constellatory thinking often left to poets. In other words.',
        dataList: [
          {
            key: 1,
            label: 'Origin',
            value: 'New Orleans, LA',
          },
          {
            key: 2,
            label: 'Genre',
            value: 'Hip-Hop/Rap',
          },
          {
            key: 3,
            label: 'Born',
            value: 'Set 27, 1982',
          },
        ],
        // > Estes dados não estavam diponiveis na API entao deixei fixo
      }),
    );
  } catch (err) {
    console.tron.log(err);
    // yield call(toastr.error, 'Erro', 'Não foi possivel obter a lista de Album');
  }
}
