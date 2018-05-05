const openOptionsPage = () => {
  chrome.tabs.create({
    url: 'dist/options.html'
  });
};

export default openOptionsPage;
