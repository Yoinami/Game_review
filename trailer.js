let slideIndex = 1;
showSlides(slideIndex);

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
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("thumbnail-i");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("focus" ,"")
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " focus";
    scroll();
    
}
function scroll() {
    var elem = document.getElementById('data');
    if(slideIndex > 3) {
        elem.scrollBy(200, 0);
    } else {
        elem.scrollBy(-200, 0)
    }
}