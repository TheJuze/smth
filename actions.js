function time() {
  var d = new Date();
  return d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();
}
function getTime() {
  document.write("<h1>Привет, читатель!</h1>");
  var d = new Date();
  document.write(
    "<p>Сегодня ",
    time(),
    " ты начинаешь изучать динамический HTML</p>"
  );
}
function dateAlert() {
  var CurrentDate = time();
  alert(CurrentDate);
}
function reaction() {
  var tBegin = new Date();
  alert(tBegin.getTime() - tEnd.getTime());
}
function newLoad() {
  document.write(
    "<pre>Первая" +
      "\t" +
      "строка\n" +
      "Вторая" +
      "\t" +
      "строка\n" +
      "Третья" +
      "\t" +
      "строка</pre>"
  );
}
function newAlert() {
  alert("Первая" + " строка\n" + "Вторая" + " строка\n" + "Третья" + " строка");
}
function vType() {
  var v = -1.1;
  v = 0;
  v = true;
  alert(typeof v);
}
function factorial(n) {
  if (n == 0 || n == 1) return 1;
  else return n * factorial(n - 1);
}
function myFactorial() {
  x = window.prompt("Введите целое число", "");
  if (x == Number(x)) {
    alert(factorial(x));
  } else alert("Следует ввести целое число!");
}
function myConcat(separator) {
  result = "";
  for (var i = 1; i < arguments.length; i++) {
    result += arguments[i] + (i == arguments.length - 1 ? "" : separator);
  }
  alert(result);
}
function pressure(value,code){
  if(code==0){
    return value*101325/760;
  }
  else if(code==1){
    return value*769/101325;
  }
  else alert("Значение =0 для мм рт. ст. в Па и =1 для Па в мм рт. ст.")
}
function Mypressure(){
  var str=prompt('Введите через пробел код, начальное значение, конечное значение шаг','');
  var A=str.split(' ');
  c=A[0]*1;v1=A[1]*1;v2=A[2]*1;s=A[3]*1;
  for(i=v1;i<=v2;i+=s)
  {
    document.write("<p> ",pressure(i,c)," </p>");
  }
}
Object.prototype.propList = props;
function props(){
  var s="";
  for (var i in this){
    s+= i+': '+this[i]+'<br>';
  }
  return s;
}
function myProps(){
  var s=new Date();
  document.write(s.propList());
}