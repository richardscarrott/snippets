import 'babel-polyfill';
import uuid from 'uuid/v1';
import configureStore from '../redux/store/configure-store';
import { sourcesSelector } from '../redux/selectors/sources/sources';

const ID_DELIMITER = '/';

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

const render = state => {
  return removeAllContextMenus()
    .then(() => {
      const topLevelContextMenuId = uuid();
      return createContextMenu({
        id: topLevelContextMenuId,
        title: 'Snippets'
      }).then(() => topLevelContextMenuId);
    })
    .then(topLevelContextMenuId => {
      const sources = sourcesSelector(state);
      return Promise.all(
        sources.map(source =>
          renderContentContextMenu(source.content, topLevelContextMenuId)
        )
      );
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
setTimeout(() => {
  start(store);
}, 2000);
