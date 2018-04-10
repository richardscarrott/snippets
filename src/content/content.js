// chrome.extension.sendMessage({}, function(response) {
// 	var readyStateCheckInterval = setInterval(function() {
// 	if (document.readyState === "complete") {
// 		clearInterval(readyStateCheckInterval);

// 		// ----------------------------------------------------------
// 		// This part of the script triggers when page is done loading
// 		console.log("Hello. This message was sent from scripts/inject.js");
// 		// ----------------------------------------------------------

// 	}
// 	}, 10);
// });

chrome.extension.onMessage.addListener(function(message, sender) {
  if (message.action === 'run-snippet') {
    const script = document.createElement('script');
    script.textContent = message.code;
    (document.head || document.documentElement).appendChild(script);
    script.remove();
  }
});
