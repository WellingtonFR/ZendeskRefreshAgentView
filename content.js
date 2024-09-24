function autoClick() {
  let buttonRefresh = document.querySelector('[data-test-id="views_views-list_header-refresh"]');
  if (buttonRefresh) {
    buttonRefresh.click();
  }
}

chrome.storage.sync.get(["interval"], function (result) {
  const interval = result.interval || 5000;
  setInterval(autoClick, interval);
});
