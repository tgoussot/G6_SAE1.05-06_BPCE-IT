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