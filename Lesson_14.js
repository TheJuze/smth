function flashMe(eSrc, sColor) {
  eSrc.style.color = sColor;
}
function toggleList(eTarget) {
  eTarget.style.display == "none"
    ? (eTarget.style.display = "block")
    : (eTarget.style.display = "none");
  eTarget.style.color = "black";
}
function StartGlide() {
  x = parseInt(document.body.offsetWidth) / 2;
  y = parseInt(document.body.offsetHeight) / 2;
  r = (3 * y) / 5;
  dt = 0.1;
  t = 0;
  action = window.setInterval("Glide()", 100);
}
function Glide() {
  t += dt;
  Banner.style.left = x + r * Math.sin(t);
  Banner.style.top = y + r * Math.cos(t);
}
pictures = new Array(
  "Илита.png",
  "7PVHpBHAaA4.jpg",
  "fBiQkxT9zbI.jpg",
  "IMG_9550.JPG",
  "FyMIJP4U6as.jpg"
);
c=0;
function newPicture() {
  SRC.src = pictures[c%5];
  c++;
}
autoNew(){
    action=window.setInterval("newPicture",500);
}