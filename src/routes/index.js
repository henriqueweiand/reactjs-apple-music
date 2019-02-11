import React from 'react';

import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import history from './history';

import Main from '~/pages/Main';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
