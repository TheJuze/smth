function showEventType(event) {
  alert("Произошло событие:" + event.type);
}
function f(event) {
  // alert(event.srcElement.tagName)
  if (event.srcElement.tagName == "B") {
    event.srcElement.style.color = "red";
  }
}
function f1(event) {
  if (event.srcElement.tagName == "A" && event.shiftKey) {
    event.returnValue = false;
  }
}
function numbers() {
  if (
    event.srcElement.tagName == "INPUT" &&
    event.keyCode <= 57 &&
    event.keyCode >= 48
  ) {
    event.returnValue = true;
  } else event.returnValue = false;
}
var count=100;
function picture()
{
  if (event.wheelDelta <= -120)
     count += 5;
  else if (event.wheelDelta >= 120)
     count -= count <= 10 ? 0 : 5;
   
     event.srcElement.style.zoom = count + "%";
     window.status= event.srcElement.style.zoom;
}

