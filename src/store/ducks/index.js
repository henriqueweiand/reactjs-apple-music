import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import album from './album';
import artist from './artist';
import featured from './featured';

export default history => combineReducers({
  album,
  artist,
  featured,
  router: connectRouter(history),
});
