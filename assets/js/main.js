var btn = document.querySelector(".btn");
var info = document.querySelector(".info")

btn.addEventListener("click", deleteDiv);

function deleteDiv(params) {
    info.parentNode.removeChild(info);
}