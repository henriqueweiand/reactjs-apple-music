import { put } from 'redux-saga/effects';

import { Creators as FeaturedActions } from '~/store/ducks/featured';

export function* getFeatured() {
  try {
    // Não existe endpoint na api para retornar as informações, mas deixei o exemplo de chamada externa simulando que existisse
    // const response = yield call(api.get, `lookup?id=${id}`);

    yield put(
      FeaturedActions.getFeaturedSuccess(
        // < Estes dados não estavam diponiveis na API entao deixei fixo
        [
          {
            key: 1,
            cover:
              'https://is3-ssl.mzstatic.com/image/thumb/Music/v4/c9/ed/91/c9ed91a9-9c95-b3a1-06e9-c8f70690602d/source/190x190cc.jpg',
            autorName: 'Bird Man',
            category: 'Hip-Hop/Rap',
          },
          {
            key: 2,
            cover:
              'https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/f4/f6/51/f4f651ba-1dc5-07e3-e013-a0e6960a2689/source/190x190cc.jpg',
            autorName: 'DJ Khaled',
            category: 'Hip-Hop/Rap',
          },
          {
            key: 3,
            cover:
              'https://is4-ssl.mzstatic.com/image/thumb/Music/v4/b7/69/d6/b769d6ed-0abc-a73d-5ef6-30d4e18711d5/source/190x190cc.jpg',
            autorName: 'Dj Drama',
            category: 'Hip-Hop/Rap',
          },
          {
            key: 4,
            cover:
              'https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/b0/f6/93/b0f69307-adac-76a7-78aa-8b23eb108107/source/146x146sr.jpg',
            autorName: 'Wiz Khalifa',
            category: 'Hip-Hop/Rap',
          },
        ],
        // > Estes dados não estavam diponiveis na API entao deixei fixo
      ),
    );
  } catch (err) {
    console.tron.log(err);
    // yield call(toastr.error, 'Erro', 'Não foi possivel obter a lista de Album');
  }
}
