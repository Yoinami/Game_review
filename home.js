let slideIndex = 1;
showSlides(slideIndex);
setInterval(window.scrollBy(-100, 0), 100)
function plusSlides(n) {
    if (n === undefined) {
        n = 1;
      }
    showSlides(slideIndex += n);
}

function changeSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    let box = document.getElementsByClassName("slide-moreinfo");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for(i=0; i < box.length; i++) {
        box[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    box[slideIndex-1].style.display = "block";
}
//setInterval(plusSlides, 8000);
function showText() {
    let text = document.getElementsByClassName("caption");
    let i;
    for(i=0; i < text.length; i++) {
        text[i].style.visibility = "visible"
    }
}
function dontText() {
    let text = document.getElementsByClassName("caption");
    let i;
    for(i=0; i < text.length; i++) {
        text[i].style.visibility= "hidden";
    }
}
function goTotag(n) {
    localStorage.setItem("tag", n);
    location.href = 'reviews.html';
}