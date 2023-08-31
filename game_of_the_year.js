var border = document.getElementById("winner-img-container");
var angle = 145

function rotateBg() {
    angle += 3;
    border.style.borderImage = 'linear-gradient(' + angle + 'deg ,#f6b73c, #fff) 10';
}

setInterval(rotateBg, 100)
