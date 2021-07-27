var botonCarruselUno = document.getElementById("boton__carrusel-uno");
var botonCarruselDos = document.getElementById("boton__carrusel-dos");
var botonCarruselTres = document.getElementById("boton__carrusel-tres");
var botonCarruselCuatro = document.getElementById("boton__carrusel-cuatro");
var carruselContainer = document.getElementById("carrusel");
var botonPlayPause = document.getElementById("boton__carrusel-playpause");
var play = 1;

botonCarruselUno.addEventListener("click", moverCarruselUno);
botonCarruselDos.addEventListener("click", moverCarruselDos);
botonCarruselTres.addEventListener("click", moverCarruselTres);
botonCarruselCuatro.addEventListener("click", moverCarruselCuatro);

botonPlayPause.addEventListener("click", playPauseCarrusel);


function moverCarruselUno(){
    carruselContainer.style.animation = "none";
    carruselContainer.style.left = "0%";
    play = 0;
    botonPlayPause.style.backgroundImage = "url(./pics/play_circle_white_24dp.svg)";
}

function moverCarruselDos(){
    carruselContainer.style.animation = "none";
    carruselContainer.style.left = "-100%";
    play = 0;
    botonPlayPause.style.backgroundImage = "url(./pics/play_circle_white_24dp.svg)";
}

function moverCarruselTres(){
    carruselContainer.style.animation = "none";
    carruselContainer.style.left = "-200%";
    play = 0;
    botonPlayPause.style.backgroundImage = "url(./pics/play_circle_white_24dp.svg)";
}

function moverCarruselCuatro(){
    carruselContainer.style.animation = "none";
    carruselContainer.style.left = "-300%";
    play = 0;
    botonPlayPause.style.backgroundImage = "url(./pics/play_circle_white_24dp.svg)";
}

function playPauseCarrusel (){
    if (play != 1 && carruselContainer.style.animation == "0s ease 0s 1 normal none running none") {
        carruselContainer.style.animation = "30s slidy infinite";
        play = 1;
        botonPlayPause.style.backgroundImage = "url(./pics/pause_circle_white_24dp_d2.svg)";
    } else if (play == 0) {
        carruselContainer.style.animationPlayState = "running";
        play = 1;
        botonPlayPause.style.backgroundImage = "url(./pics/pause_circle_white_24dp_d2.svg)";
    } else {
        carruselContainer.style.animationPlayState = "paused";
        play = 0;
        botonPlayPause.style.backgroundImage = "url(./pics/play_circle_white_24dp.svg)";
    }
}