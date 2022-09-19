//--------------------------- nav bar-----------------------------------------
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// -------------------Slider présentation pages annexes--------------------


let img_slider = document.getElementsByClassName('img_slider'); 

let etape = 0;

let nbr_img = img_slider.length;

function enleverActiveImages() {        // met les images que l'on ne veut pas visible avec une opacité de 0 (CSS)
    for(let i = 0 ; i < nbr_img ; i++) {
        img_slider[i].classList.remove('active');
    }
}

setInterval(function() {                // passage auto à l'image suivante
    etape++;
    if(etape >= nbr_img) {
        etape = 0;
    }
    enleverActiveImages();
    img_slider[etape].classList.add('active');
}, 2000)

// ------------------------------------------------------------------------