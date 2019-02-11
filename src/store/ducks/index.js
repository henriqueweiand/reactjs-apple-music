import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import album from './album';
import artist from './artist';
import song from './song';

export default history => combineReducers({
  album,
  artist,
  song,
  router: connectRouter(history),
});
