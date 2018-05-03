import 'babel-polyfill';
import uuid from 'uuid/v1';
import configureStore from '../redux/store/configure-store';
import {
  sourcesSelector,
  filesSelector
} from '../redux/selectors/sources/sources';
import fuzzysort from 'fuzzysort';

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

persistor.subscribe(() => {
  const { bootstrapped } = persistor.getState();
  if (bootstrapped) {
    start(store);
  }
});

chrome.browserAction.onClicked.addListener(() => openOptionsPage());

setTimeout(() => {
  // https://developer.chrome.com/extensions/omnibox
  const state = store.getState();
  const files = filesSelector(state);
  // This event is fired with the user accepts the input in the omnibox.
  chrome.omnibox.onInputChanged.addListener((text, suggest) => {
    // console.log(text, 'M-----');
    const result = fuzzysort.go(text, files, { key: 'path' });
    const suggestions = result.map(result => {
      console.log(fuzzysort.highlight(result), '<---');
      return {
        content: result.obj.name, // prob should be the path, that way we can find the content in onInputEntered.
        description:
          '<url>' +
          fuzzysort.highlight(result, '<match>', '</match>') +
          '</url>', // result.obj.path,
        deletable: false
      };
    });
    suggest(suggestions);
    // [
    //   {
    //     content: 'hello content',
    //     description: 'hello description',
    //     deletable: false
    //   }
    // ]);
    // chrome.omnibox.setDefaultSuggestion(object suggestion)
    // Encode user input for special characters , / ? : @ & = + $ #
    // var newURL = 'https://www.google.com/search?q=' + encodeURIComponent(text);
    // chrome.tabs.create({ url: newURL });
  });
  chrome.omnibox.onInputEntered.addListener(text => {
    console.log('Running snippet', text);
  });
}, 2000);
