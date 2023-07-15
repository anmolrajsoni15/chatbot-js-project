window.addEventListener("message", receiveMessage, false);
function receiveMessage(event) {
  var parameter = event.data;
  if (typeof parameter === "object" && parameter !== null) {
    parameter = JSON.stringify(parameter);
  }
  if (parameter === "open") {
    document.getElementById("myIframe").style.width = "350px";
    document.getElementById("myIframe").style.height = "600px";
  } else if (parameter === "close") {
    setTimeout(() => {
      document.getElementById("myIframe").style.width = "100px";
      document.getElementById("myIframe").style.height = "100px";
    }, 1000);
  }
}
