var img = document.getElementById('img');

var slides = ['genshin_impact.jpeg','elden-ring.jpeg','hollow-knight.jpeg'];

var Start=0;

function slider(){
    if(Start<slides.length) {
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src=image/"+slides[Start-1]+">";  
}
setInterval(slider,5000);
