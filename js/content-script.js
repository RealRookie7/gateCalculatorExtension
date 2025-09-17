(function injectCalculator() {
  const iframeId = "gate-calculator-iframe";
  const existingIframe = document.getElementById(iframeId);

  if (existingIframe) {
    existingIframe.remove();
    return;
  }

  const iframe = document.createElement("iframe");
  iframe.id = iframeId;
  iframe.src = chrome.runtime.getURL("index.html");
  iframe.style.position = "fixed";
  iframe.style.top = "10px";
  iframe.style.right = "10px";
  iframe.style.width = "470px";
  iframe.style.height = "600px";
  iframe.style.zIndex = "9999";
  iframe.style.border = "none";
  document.body.appendChild(iframe);

  window.addEventListener("message", function (event) {
    if (event.data.type && event.data.type === "closeCalculator") {
      const iframeToRemove = document.getElementById(iframeId);
      if (iframeToRemove) {
        iframeToRemove.remove();
      }
    }
  });
})();
