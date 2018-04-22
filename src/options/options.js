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

const [store, persistor] = chrome.extension.getBackgroundPage().getStore();

if (!store) {
  throw new Error('Expected global `store` defined by background page.');
}

const history = createHistory();

// TODO: Make these available in CSS modules.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#70e1cd',
      main: '#37af9c',
      dark: '#007f6e',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff828f',
      main: '#f64e62',
      dark: '#bd0538',
      contrastText: '#fff'
    }
  }
});

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
