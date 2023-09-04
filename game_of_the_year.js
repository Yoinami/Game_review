var border = document.getElementById("winner-img-container");
var angle = 145;


function rotateBg() {
    if(angle > 360) {
        angle -= 360
    }
    angle += 5;
    border.style.borderImage = 'linear-gradient(' + angle + 'deg ,#f6b73c, #0C84F2) 10';
}
setInterval(rotateBg, 100)
