function parent(e, n) {
  if (n === undefined) n = 1;
  while (n-- && e) e = e.parentNode;
  if (!e || e.nodeType !== 1) return null;
  return e;
}

function sibling(e, n) {
  while (e && n !== 0) {
    if (n > 0) {
      if (e.nextSibling) e = e.nextElementSibling;
      else {
        for (e = e.nextSibling; e && e.nodeType !== 1; e = e.nextSibling);
      }
      n--;
    } else {
      if (e.previousElementSibling) e = e.previousElementSibling;
      else {
        for (
          e = e.previousElementSibling;
          e && e.nodeType !== 1;
          e = e.previousSibling
        );
      }
    }
  }
  return e;
}

function GetSecondChild() {
  var parent = document.getElementById("parent");
  var secondChild =
    parent.firstElementChild.nextElementSibling.firstElementChild
      .firstElementChild.nextElementSibling;
  secondChild.style.color = "red";
  alert(secondChild.firstChild.nodeValue);
}
