// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// -------------------Slider présentation pages annexes--------------------
// --------------------------by Peyrous Yonnis-----------------------------

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