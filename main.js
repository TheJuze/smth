function getProps() {
  s = prompt("Имя объекта", "");
  obj = eval(s);
  document.write("<table border='1'><br>");
  document.write("<tr><th colspan='2'>" + s + "</th></tr>");
  for (i in obj) {
    document.write("<tr><td>" + i + "</td><td>" + obj[i] + "</td></tr>");
  }
  document.write("</table>");
  
}

function validate() {
  var ret = true;
  var age=document.getElementsByName("age")[0];
  if(isNaN(parseInt(age.value))) {
    ret = false;
    alert("Год должен быть целым числом!");
    age.value = "";
    age.focus();
  }	
  return ret;
}
