window.addEventListener('DOMContentLoaded', init, false);

function init() {
    alert('The Page is loading');
    var buttons = document.getElementsByTagName("button");
    buttons[0].addEventListener('click', changeColor, false);
    buttons[1].addEventListener('click', hideText, false);
    buttons[2].addEventListener('click', showText, false);
}

function changeColor() {
    var p1 = document.getElementById("colorToggle");
    p1.style.backgroundColor = "skyblue";
}

function hideText() {
    var paragraphs = document.getElementsByTagName('p');
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.display = "none";
    }
}

function showText() {
    var paragraphs = document.getElementsByTagName('p');
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.display = "block";
    }
}

