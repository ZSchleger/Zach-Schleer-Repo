window.addEventListener('DOMContentLoaded', init, false);

function init() {
    alert('The Page is loading');
var buttons = document.getElementsByTagName("button");
    buttons[0].addEventListener('click', changeColor, false);
    buttons[1].addEventListener('click', toggleText, false);
    buttons[2].addEventListener('click', toggleBackground, false);

}

function changeColor() {
    var p1 = document.querySelector(".colorToggle");
    p1.style.color = "skyblue";
}

function toggleText() {
    var paragraphs = document.querySelectorAll("p");
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].classList.toggle('on');
    }
}

function toggleBackground() {
    document.body.classList.toggle('on');
}

