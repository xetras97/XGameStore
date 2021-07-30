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

let juegosLanzamientos = [
    {
        "nombre" : "Chernobylite",
        "src" : "./pics/Juegos/chernobylite-1.jpg",
        "precio" : "US$ 5.36",
    },
    {
        "nombre" : "Fuga: Melodies of Steel",
        "src" : "./pics/Juegos/fuga.jpg",
        "precio" : "US$ 8.49",
    },
    {
        "nombre" : "The Ascent",
        "src" : "./pics/Juegos/The-ascent.jpg",
        "precio" : "US$ 10.56",
    },
    {
        "nombre" : "Starbase",
        "src" : "./pics/Juegos/starbase.jpg",
        "precio" : "US$ 3.46",
    },
    {
        "nombre" : "Tribes of Midgard",
        "src" : "./pics/Juegos/tribes-of-midgard.jpg",
        "precio" : "US$ 2.10",
    },
    {
        "nombre" : "The Forgotten City",
        "src" : "./pics/Juegos/forgotten-city.jpg",
        "precio" : "US$ 8.09",
    },
]

let juegosProximamente = [
    {
        "nombre": "Battlefield 2042",
        "src": "./pics/Juegos/battlefield-2042.jpg",
        "fecha": calcularFecha(51),
    },
    {
        "nombre": "Grime",
        "src": "./pics/Juegos/grime.jpg",
        "fecha": calcularFecha(60),
    },
    {
        "nombre": "T. War: Warhammer III",
        "src": "./pics/Juegos/total-war-warhammer-iii.jpg",
        "fecha": calcularFecha(180),
    },
    {
        "nombre": "Party Animals",
        "src": "./pics/Juegos/party-animals-cover.jpg",
        "fecha": calcularFecha(35),
    },
]


// LISTENERS PARA CARRUSEL
botonCarruselUno.addEventListener("click", moverCarruselUno);
botonCarruselDos.addEventListener("click", moverCarruselDos);
botonCarruselTres.addEventListener("click", moverCarruselTres);
botonCarruselCuatro.addEventListener("click", moverCarruselCuatro);
botonPlayPause.addEventListener("click", playPauseCarrusel);

// LISTENER PARA BARRA DE BUSQUEDA 
document.getElementById("search-container").addEventListener("click", cambiarOpacidad);
window.addEventListener("scroll", cambiarOpacidadBusqueda);

// FUNCIONES SECTION 1
// FUNCION BARRA DE BUSQUEDA
function cambiarOpacidad(){
    document.getElementById("search-container").style.opacity = "1";
}

let opacidadBusqueda = 0;
    function cambiarOpacidadBusqueda () {
        if (window.scrollY >= 1 && opacidadBusqueda == 0) {
            document.getElementById("search-section").style.opacity = "0.7";
            opacidadBusqueda = 1;
        } else if (opacidadBusqueda == 1 && window.scrollY == 0) {
            document.getElementById("search-section").style.opacity = "1";
            opacidadBusqueda = 0;
        }
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

function calcularFecha(dias) {
    let fecha = new Date(Date.now() + (dias * 86400000));
    return fecha.toLocaleDateString();
}

function renderizarLanzamientos() {
    let html = "";
    juegosLanzamientos.forEach(juego => {
        html +=
        `<div class="new-games__game-target">
            <figure><img src="`+ juego.src +`" alt="`+juego.nombre+`"></figure>
            <h3>`+juego.nombre+`</h3>
            <p>`+juego.precio+`</p>
        </div>`
    });
    document.getElementById("new-games-container").innerHTML = html;
}

function renderizarProximamente() {
    let html = "";
    
    juegosProximamente.forEach(juego => {
        html +=
        `<div class="new-games__game-target">
        <figure><img src="`+ juego.src +`" alt="`+juego.nombre+`"></figure>
        <h3>`+juego.nombre+`</h3>
        <p>`+juego.fecha+`</p>
        </div>`
    });
    document.getElementById("coming-soon-container").innerHTML = html;
};

renderizarLanzamientos();
renderizarProximamente();

