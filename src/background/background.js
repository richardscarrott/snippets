import 'babel-polyfill';
import configureStore from '../redux/store/configure-store';
import initContextMenu from './context-menu/context-menu';
import initOmnibox from './omnibox/omnibox';
import openOptionsPage from './utils/open-options-page/open-options-page';

const [store, persistor] = configureStore();
window.getStore = () => [store, persistor]; // Expose store to options page.

persistor.subscribe(() => {
  const { bootstrapped } = persistor.getState();
  if (bootstrapped) {
    chrome.browserAction.onClicked.addListener(() => openOptionsPage());
    initContextMenu(store);
    initOmnibox(store);
  }
});
