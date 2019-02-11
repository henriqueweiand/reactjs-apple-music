import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import '~/config/reactotron';

import Routes from '~/routes';
import { store } from '~/store';

import GlobalStyle from '~/styles/global';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Fragment>
  </Provider>
);

export default App;
