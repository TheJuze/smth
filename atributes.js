"use strict";
var p;
function newIMG() {
  var sRC = document.getElementById("SRC");
  sRC.src = prompt("Введите адрес картинки", "Dima.jpg");
  sRC.width = 2 * sRC.getAttribute("width");
  sRC.setAttribute("height", 100);
}
function init(){
    p = document.getElementById("p_element");
    alert(p.textContent);
}
function textCont() {
  p = document.getElementById("p_element");
  alert(p.textContent);
}
function inner() {
  alert(p.innerHTML);
}
function outer() {
  alert(p.textContent);
}
function insert() {
  var where = prompt(
    "Where insert?(beforbegin,afterbegin,beforeend,afterend)",
    ""
  );
  var html = prompt("What insert?", "");
  p.insertAdjacentHTML(where, html);
}
function changeText() {
  p.textContent = "First class is good";
}
function textConten(e) {
  var child,
    type,
    s = "";
  for (child = e.firstChild; child != null; child = child.nextSibling) {
    type = child.nodeType;
    if (type === 3 || type === 4) s += child.nodeValue;
    else if (type === 1) s += textConten(child);
  }
  alert(s);
}
function upcase(n){
    if(n.nodeType==3|| n.nodeType== 4)
        n.data=n.data.toUpperCase();
        else
            for(var i=0;i<n.childNodes.length;i++)
                upcase(n.childNodes[i]);
}
