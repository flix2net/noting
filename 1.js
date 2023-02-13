var element = document.querySelector("##tr.text-color.v-middle:nth-of-type(1)");
var event = new MouseEvent("click", {
  bubbles: true,
  cancelable: true,
  view: window
});
element.dispatchEvent(event);
