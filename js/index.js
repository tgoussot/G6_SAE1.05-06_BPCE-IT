                
                // Sliders presentations pages annexes


// var slider 01

let img_slider = document.getElementsByClassName('img_slider');     
let etape = 0;
let nbr_img = img_slider.length;


// var slider 02

let img_slider02 = document.getElementsByClassName('img_slider02');     
let etape02 = 0;
let nbr_img02 = img_slider02.length;


// var slider 03

let img_slider03 = document.getElementsByClassName('img_slider03');     
let etape03 = 0;
let nbr_img03 = img_slider03.length;


// fonctions qui change retire la classe active-02-03

function enleverActiveImages() {        


    for(let i = 0 ; i<nbr_img ; i++) {
        img_slider[i].classList.remove('active');
    }
}

function enleverActiveImagesDeux() {        
    for(let j = 0 ; j<nbr_img02 ; j++) {
        img_slider02[j].classList.remove('active02');
    }
}

function enleverActiveImagesTrois() {        
    for(let k = 0 ; k<nbr_img03 ; k++) {
        img_slider03[k].classList.remove('active03');
    }
}

// ajout de la classe active-02-03 aux images que l'on veut voir 

setInterval(function() {                
    etape++,etape02++,etape03++;
    if(etape >= nbr_img) {
        etape = 0;
    }
    enleverActiveImages();
    img_slider[etape].classList.add('active');


    if(etape02 >= nbr_img02) {
        etape02 = 0;
    }
    enleverActiveImagesDeux();
    img_slider02[etape02].classList.add('active02');


    if(etape03 >= nbr_img03) {
        etape03 = 0;
    }
    enleverActiveImagesTrois();
    img_slider03[etape03].classList.add('active03');
}, 2000)


// -----------descente automatique de la page lorsque son format est superieur a 16/9-----------------


largeur = window.innerWidth;
hauteur = window.innerHeight;

ratio = largeur/hauteur;

if (ratio > 1.7){
    window.scroll(0,95);
}