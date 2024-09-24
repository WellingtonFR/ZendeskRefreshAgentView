var saveButton = document.getElementById("btn_save");
var intervalInput = document.getElementById("interval");

document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.sync.get(["interval"], function (data) {
    intervalInput.value = data.interval / 1000 || 5;
  });

  saveButton.addEventListener("click", function () {
    var interval = parseInt(intervalInput.value, 10);

    if (interval >= 1 && interval <= 60) {
      interval *= 1000;
      console.log("New Interval: " + interval);

      chrome.storage.sync.set({ interval: interval });
      window.close();
    } else {
      alert("Somente valores entre 1 e 60");
    }
  });
});
