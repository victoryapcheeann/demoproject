import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

export default ({ children }) => {
  const store = createStore(reducers);

  return <Provider store={store}>{children}</Provider>;
};