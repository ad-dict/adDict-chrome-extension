chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {schemes: [ 'http', 'https']},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.commands.onCommand.addListener(function (command) {
    if (command === "save") {
      chrome.tabs.executeScript(null, {
        code: "window.getSelection().toString();"
      }, function(selection) {
        chrome.tabs.create({url: chrome.extension.getURL('addWord.html?word=' + selection)});
      })
    }
});