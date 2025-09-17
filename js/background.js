chrome.browserAction.onClicked.addListener(function (tab) {
  if (!tab.id) return;

  chrome.tabs.executeScript(tab.id, {
    file: "js/content-script.js"
  });
});

chrome.commands.onCommand.addListener(function (command) {
  if (command === "_execute_browser_action") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      if (!tab?.id) return;

      chrome.tabs.executeScript(tab.id, {
        file: "js/content-script.js"
      });
    });
  }
});
