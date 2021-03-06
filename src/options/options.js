import 'babel-polyfill';
import './options.html';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { Router } from 'react-router-dom';
import createHistory from 'history/createMemoryHistory';
import { PersistGate } from 'redux-persist/integration/react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Expected #root element in initial html.');
}

// TODO: Make these available in CSS modules.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5f7481',
      main: '#344955',
      dark: '#0b222c',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ffff5e',
      main: '#f7df1e',
      dark: '#c0ae00',
      contrastText: '#000'
    }
  }
});

const history = createHistory();

chrome.runtime.getBackgroundPage(({ getStore }) => {
  if (!getStore) {
    throw new Error('Expected global `getStore` defined by background page.');
  }
  const [store, persistor] = getStore();
  render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MuiThemeProvider theme={theme}>
          <Router history={history}>
            <App />
          </Router>
        </MuiThemeProvider>
      </PersistGate>
    </Provider>,
    rootElement
  );

  window.addEventListener(
    'unload',
    () => {
      // NOTE: It's v. important to unmount the react component tree to ensure any subscriptions
      // held by the store in the background page are removed (otherwise hell will open up).
      unmountComponentAtNode(rootElement);
    },
    false
  );
});
