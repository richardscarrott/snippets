import 'babel-polyfill';
import uuid from 'uuid/v1';
import configureStore from '../redux/store/configure-store';
import { sourcesSelector } from '../redux/selectors/sources/sources';

const ID_DELIMITER = '/';

const openOptionsPage = () => {
  chrome.tabs.create({
    url: 'dist/options.html'
  });
};

const runCode = (tab, code) => {
  chrome.tabs.sendMessage(tab.id, {
    action: 'run-snippet',
    code
  });
};

const createCallback = (resolve, reject) => () => {
  if (chrome.runtime.lastError) {
    reject(chrome.runtime.lastError);
    return;
  }
  resolve();
};

const createContextMenu = options =>
  new Promise((resolve, reject) =>
    chrome.contextMenus.create(options, createCallback(resolve, reject))
  );

const removeAllContextMenus = () =>
  new Promise((resolve, reject) =>
    chrome.contextMenus.removeAll(createCallback(resolve, reject))
  );

const renderContentContextMenu = (content, parentId) => {
  const id = `${parentId}${ID_DELIMITER}${content.id}`;
  return createContextMenu({
    id,
    title: content.name,
    parentId
  }).then(() => {
    if (Array.isArray(content.content)) {
      return Promise.all(
        content.content.map(content => renderContentContextMenu(content, id))
      );
    }
  });
};

const OPTIONS_CONTEXT_MENU_ID = uuid();
const TOP_LEVEL_CONTEXT_MENU_ID = uuid();

const render = state => {
  return removeAllContextMenus()
    .then(() => {
      return createContextMenu({
        id: TOP_LEVEL_CONTEXT_MENU_ID,
        title: 'Snippets'
      });
    })
    .then(() => {
      const sources = sourcesSelector(state);
      return Promise.all(
        sources.map(source =>
          renderContentContextMenu(source.content, TOP_LEVEL_CONTEXT_MENU_ID)
        )
      );
    })
    .then(() => {
      return createContextMenu({
        id: OPTIONS_CONTEXT_MENU_ID,
        title: 'Add new snippets',
        parentId: TOP_LEVEL_CONTEXT_MENU_ID
      });
    });
};

const start = store => {
  let renderer = render(store.getState());
  store.subscribe(() => {
    renderer = renderer.then(() => {
      // May want to debounce this.
      return render(store.getState());
    });
  });
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === OPTIONS_CONTEXT_MENU_ID) {
      openOptionsPage();
      return;
    }
    const menuItemIdParts = info.menuItemId.split(ID_DELIMITER);
    const fileId = menuItemIdParts[menuItemIdParts.length - 1];
    const file = store.getState().entities.files[fileId]; // TODO: Use selector.
    const code = atob(file.content);
    runCode(tab, code);
  });
};

const [store, persistor] = configureStore();
// Expose store to options page.
window.getStore = () => [store, persistor];

// HACK: Don't render until store has persisted. (TODO: copy PersistGate implementation.)
persistor.subscribe(() => {
  const { bootstrapped } = persistor.getState();
  if (bootstrapped) {
    start(store);
  }
});

chrome.browserAction.onClicked.addListener(() => openOptionsPage());
