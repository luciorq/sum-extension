chrome.tabs.query({
  active: true,
  lastFocusedWindow: true
}, function(tabs) {
  // and use that tab to fill in out title and url
  var tab = tabs[0];
  var window_str = tab.url;
  var full_url = "https://labs.kagi.com/ai/sum?url="+window_str+"&expand=1";
  window.open(full_url);
});