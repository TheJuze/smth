function replace(){
    var b=document.getElementsByTagName("b");
    for (j=0;j<b.length;){
        var text=b[j].firstChild;
        var i=document.createElement("i");
        b[j].parentNode.replaceChild(i,b[j]);
        i.appendChild(text);
    }
}
