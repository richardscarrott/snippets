const execSnippet = (tab, fileContent) => {
  // TODO: Look into using https://developer.chrome.com/extensions/tabs#method-executeScript
  chrome.tabs.sendMessage(tab.id, {
    action: 'run-snippet',
    code: atob(fileContent)
  });
};

export default execSnippet;
