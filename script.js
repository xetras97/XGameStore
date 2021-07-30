// VARAIABLES SECTION 1
    // VARAIBLES PARA CARRUSEL
var botonCarruselUno = document.getElementById("boton__carrusel-uno");
var botonCarruselDos = document.getElementById("boton__carrusel-dos");
var botonCarruselTres = document.getElementById("boton__carrusel-tres");
var botonCarruselCuatro = document.getElementById("boton__carrusel-cuatro");
var carruselContainer = document.getElementById("carrusel");
var botonPlayPause = document.getElementById("boton__carrusel-playpause");
var play = 1;

    // VARIABLES Y LISTENERS PARA ARTICLE
var bLanActivado = 1;
var bProxActivado = 0;
document.getElementById("boton-lanzamientos").addEventListener("click", cambioBotonLanzamientos);
document.getElementById("boton-proximamente").addEventListener("click", cambioBotonProximamente);

    // LISTENERS PARA CARRUSEL
botonCarruselUno.addEventListener("click", moverCarruselUno);
botonCarruselDos.addEventListener("click", moverCarruselDos);
botonCarruselTres.addEventListener("click", moverCarruselTres);
botonCarruselCuatro.addEventListener("click", moverCarruselCuatro);
botonPlayPause.addEventListener("click", playPauseCarrusel);
    
    // LISTENER PARA BARRA DE BUSQUEDA 
document.getElementById("search-container").addEventListener("click", cambiarOpacidad);

// FUNCIONES SECTION 1
    // FUNCION BARRA DE BUSQUEDA
function cambiarOpacidad(){
    document.getElementById("search-container").style.opacity = "1";
}

    // FUNCIONES CARRUSEL
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

    // FUNCIONES ARTICLE
function cambioBotonLanzamientos () {
    if (bLanActivado == 0 && bProxActivado == 1) {
        bLanActivado = 1;
        bProxActivado = 0;
        document.getElementById("boton-lanzamientos").style.opacity = "1";
        document.getElementById("boton-lanzamientos").style.borderTop = "2px solid var(--color-texto-enfasis)";
        document.getElementById("boton-lanzamientos").style.borderRight = "2px solid var(--color-texto-enfasis)";
        document.getElementById("boton-lanzamientos").style.borderLeft = "2px solid var(--color-texto-enfasis)";
        document.getElementById("boton-proximamente").style.opacity = "0.5";
        document.getElementById("boton-proximamente").style.borderTop = "2px solid var(--color-texto-secundario)";
        document.getElementById("boton-proximamente").style.borderRight = "2px solid var(--color-texto-secundario)";
        document.getElementById("boton-proximamente").style.borderLeft = "2px solid var(--color-texto-secundario)";
        document.getElementById("coming-soon-container").style.display = "none";
        document.getElementById("new-games-container").style.display = "grid";
    }
}

function cambioBotonProximamente () {
    if (bLanActivado == 1 && bProxActivado == 0) {
        bLanActivado = 0;
        bProxActivado = 1;
        document.getElementById("boton-lanzamientos").style.opacity = "0.5";
        document.getElementById("boton-lanzamientos").style.borderTop = "2px solid var(--color-texto-secundario)";
        document.getElementById("boton-lanzamientos").style.borderRight = "2px solid var(--color-texto-secundario)";
        document.getElementById("boton-lanzamientos").style.borderLeft = "2px solid var(--color-texto-secundario)";
        document.getElementById("boton-proximamente").style.opacity = "1";
        document.getElementById("boton-proximamente").style.borderTop = "2px solid var(--color-texto-enfasis)";
        document.getElementById("boton-proximamente").style.borderRight = "2px solid var(--color-texto-enfasis)";
        document.getElementById("boton-proximamente").style.borderLeft = "2px solid var(--color-texto-enfasis)";
        document.getElementById("new-games-container").style.display = "none";
        document.getElementById("coming-soon-container").style.display = "grid";
    }
}