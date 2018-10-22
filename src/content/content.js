chrome.extension.onMessage.addListener(function(message) {
  const existingScript = message.domIdentifier ? document.getElementById(message.domIdentifier) : null;
  if (!existingScript && message.action === 'run-snippet') {
    const script = document.createElement('script');
    message.domIdentifier && script.setAttribute('id', message.domIdentifier);
    script.textContent = `(function() { ${message.code} })();`;
    (document.head || document.documentElement).prepend(script);
  }
});
