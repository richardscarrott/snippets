const execSnippet = (tab, fileContent, domIdentifier) => {
  // TODO: Look into using https://developer.chrome.com/extensions/tabs#method-executeScript
  chrome.tabs.sendMessage(tab.id || tab, {
    domIdentifier,
    action: 'run-snippet',
    code: atob(fileContent)
  });
};

export default execSnippet;
