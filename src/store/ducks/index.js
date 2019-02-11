import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import album from './album';

export default history => combineReducers({
  album,
  router: connectRouter(history),
});
