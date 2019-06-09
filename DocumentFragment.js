function reverse(n) {
  var f = document.createDocumentFragment();
  while (n.lastChild) f.appendChild(n.lastChild);
  n.appendChild(f);
}
onLoad(function() {
  //поиск контейнера ТОС, если его нет - создаем
  var toc = document.getElementById("TOC");
  if (!toc) {
    toc = document.createElement("div");
    toc.id = "TOC";
    document.body.insertBefore(toc, document.body.firstChild);
  }
  //Все заголовки ищем
  var headings;
  if (document.querySelectorAll)
    headings = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
  else headings = findHeadings(document.body, []);
  //функция для поиска заголовков, если селектор выбрал не все
  function findHeadings(root, sects) {
    for (var c = root.firstChild; c != null; c = c.nextSibling) {
      if (c.nodeType !== 1) continue; //nodeType==1 if ElementNode
      if (c.tagName.length == 2 && c.tagName.charAt(0) == "H") sects.push(c);//если длина 2 и начинается на Н
      else findHeadings(c, sects);
    }
    return sects;
  }
  //создаем массив, следящий за числом h
  var sectionNumbers=[0,0,0,0,0,0];
  //пройдемся по секциям элементов, которые нашли
  for(var h=0;h<headings.length;h++){
      var heading=headings[h];
      //пропускаем секцию, если она не в ТОС
      if(heading.parentNode==toc) continue;
      //Вычисляем уровень заголовка
      var level=parseInt(heading.tagName.charAt(1));
      if(isNaN(level)||level<1||level>6) continue;
  }
});
