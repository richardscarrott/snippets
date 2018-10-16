import execSnippet from '../utils/exec-snippet/exec-snippet';
import { sourcesSelector } from '../../redux/selectors/sources/sources';

const isDir = content => Array.isArray(content.content);

const isFile = content => !isDir(content);

const isFileExecutable = file => file.name.endsWith('.js');

const isDirExecutable = dir => dir.content.some(isContentExecutable);

const isContentExecutable = content => {
  if (isDir(content)) {
    return isDirExecutable(content);
  }
  return isFileExecutable(content);
};

const execContentSnippet = (tab, content) => {
  if (isFile(content)) {
    if(!isFileExecutable(content)){
      return;
    }
    execSnippet(tab, content.content);
    return;
  }
  if (isDir(content)) {
    if (!isDirExecutable(content)) {
      return;
    }
    content.content.forEach(c => execContentSnippet(tab, c));
  }
};

const init = store => {
  chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
    if(info.status === 'complete'){
      sourcesSelector(store.getState()).forEach(source => {
        let regExp;
        if(source.urlPattern){
          try {
            regExp = new RegExp(source.urlPattern);
          } catch (e) {}
          if(regExp && regExp.test(tab.url)){
            source.content.forEach(content => execContentSnippet(tab, content));  
          }
        }
      });
    }
  });
};

export default init;