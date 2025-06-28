window.addEventListener("message", function (event) {
  if (event.data.type && event.data.type === "closeCalculator") {
    const iframe = document.querySelector(
      'iframe[src="' + chrome.runtime.getURL("index.html") + '"]'
    );
    if (iframe) {
      iframe.remove();
    }
  }
});
