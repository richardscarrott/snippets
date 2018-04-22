chrome.extension.onMessage.addListener(function(message) {
  if (message.action === 'run-snippet') {
    const script = document.createElement('script');
    script.textContent = `(function() { ${message.code} })();`;
    (document.head || document.documentElement).appendChild(script);
    script.remove();
  }
});
