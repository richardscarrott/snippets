import uuid from 'uuid/v1';
import { sourcesSelector } from '../../redux/selectors/sources/sources';
import openOptionsPage from '../utils/open-options-page/open-options-page';
import execSnippet from '../utils/exec-snippet/exec-snippet';

const ID_DELIMITER = '/';
const OPTIONS_CONTEXT_MENU_ID = uuid();
const TOP_LEVEL_CONTEXT_MENU_ID = uuid();

const createCallback = (resolve, reject) => () => {
  if (chrome.runtime.lastError) {
    reject(chrome.runtime.lastError);
    return;
  }
  resolve();
};

const createContextMenu = options =>
  new Promise((resolve, reject) =>
    chrome.contextMenus.create(
      {
        contexts: ['all'],
        ...options
      },
      createCallback(resolve, reject)
    )
  );

const removeAllContextMenus = () =>
  new Promise((resolve, reject) =>
    chrome.contextMenus.removeAll(createCallback(resolve, reject))
  );

const isDir = content => Array.isArray(content.content);

const isFile = content => !isDir(content);

const isFileRenderable = file => file.name.endsWith('.js');

const isDirRenderable = dir => dir.content.some(isContentRenderable);

const isContentRenderable = content => {
  if (isDir(content)) {
    return isDirRenderable(content);
  }
  return isFileRenderable(content);
};

const renderContentContextMenu = (content, parentId) => {
  if (isFile(content) && !isFileRenderable(content)) {
    return;
  }
  const id = `${uuid()}${ID_DELIMITER}${content.id}`;
  return createContextMenu({
    id,
    title: content.name,
    parentId
  }).then(() => {
    if (isDir(content)) {
      if (!isDirRenderable(content)) {
        return createContextMenu({
          id: uuid(),
          title: 'Empty',
          enabled: false,
          parentId: id
        });
      }
      return Promise.all(
        content.content.map(content => renderContentContextMenu(content, id))
      );
    }
  });
};

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
          renderContentContextMenu(source, TOP_LEVEL_CONTEXT_MENU_ID)
        )
      ).then(() => sources.length);
    })
    .then(sourcesCount => {
      return createContextMenu({
        id: OPTIONS_CONTEXT_MENU_ID,
        title: sourcesCount > 0 ? 'Manage sources' : 'Add source',
        parentId: TOP_LEVEL_CONTEXT_MENU_ID
      });
    });
};

const init = store => {
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
    execSnippet(tab, file.content);
  });
};

export default init;
