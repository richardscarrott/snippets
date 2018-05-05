import fuzzysort from 'fuzzysort';
import {
  filePathsSelector,
  filesEntitiesSelector
} from '../../redux/selectors/files/files';
import execSnippet from '../utils/exec-snippet/exec-snippet';

const init = store => {
  chrome.omnibox.onInputChanged.addListener((text, suggest) => {
    const state = store.getState();
    const filePaths = filePathsSelector(state);
    const result = fuzzysort.go(text, filePaths, { key: 'path' });
    const suggestions = result.map(result => {
      return {
        // It's a shame the omnibox api conflates the renderable text with the value as we need
        // the `id` to ensure we run the correct snippet in `onInputEntered`. We could probably
        // get away with looking the file up by path, however the path isn't strictly unique...
        content: result.obj.id,
        description: fuzzysort.highlight(result, '<match>', '</match>'),
        deletable: false
      };
    });
    suggest(suggestions);
  });
  chrome.omnibox.onInputEntered.addListener(fileId => {
    const files = filesEntitiesSelector(store.getState());
    const file = files[fileId];
    // TODO: Move to util as it's non obvious. (weird that .getCurrentTab doesn't work in background...)
    chrome.tabs.query({ currentWindow: true, active: true }, tabs =>
      execSnippet(tabs[0], file.content)
    );
  });
};

export default init;
