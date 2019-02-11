import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import album from './album';
import artist from './artist';

export default history => combineReducers({
  album,
  artist,
  router: connectRouter(history),
});
