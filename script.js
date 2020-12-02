
// function visibility() {
//     document.getElementById("container2").style.display = "block";
// }

function Expand(imgs) {

var BigImg = document.getElementById("BigImage");

BigImg.parentElement.style.display = "block";

BigImg.src = imgs.src;
}