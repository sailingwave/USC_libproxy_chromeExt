chrome.browserAction.onClicked.addListener(function(tab) {
chrome.tabs.getSelected(null,function (tab) {
  var newUrl = tab.url.replace(/(.*\/\/[^/]*)\/(.*)/,'$1.libproxy1.usc.edu/$2')
  chrome.tabs.update({url: newUrl});
});
});

