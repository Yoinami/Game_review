var border = document.getElementById("winner-img-container");
var nav = document.getElementsByClassName("super_nav")
var angle = 145
var cond = false

function rotateBg() {
    if(angle > 360) {
        angle -= 360
    }
    angle += 5;
    border.style.borderImage = 'linear-gradient(' + angle + 'deg ,#f6b73c, #0C84F2) 10';
}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
function Appear() {
    cond = true;
    closingandopening();
}
function Disappear() {
    cond = false;
    sleep(250);
    closingandopening();
}
function closingandopening() {
    if(cond == true) {
        nav[0].style.opacity = 1;
    } else {
        nav[0].style.opacity = 0;
    }
}
setInterval(rotateBg, 100)
