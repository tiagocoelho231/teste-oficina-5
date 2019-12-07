import React from 'react';
import { init } from '@rematch/core';
import { Provider } from 'react-redux';

import { Home } from './pages';
import { Header } from './components';
import reducers from './reducers';

const store = init({
  models: reducers,
  redux: {
    reducers
  }
});

const App = props => {
  return (
    <Provider store={store}>
      <Header />
      <Home />
    </Provider>
  );
}

export default App;
