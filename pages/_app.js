import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../lib/redux';

const store = configureStore();

const App = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default App
