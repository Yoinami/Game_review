var nav = document.getElementsByClassName("super_nav");
var cond = false;


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