const activator = document.getElementById('nao');
const target = document.getElementById('shi');
const image = document.getElementById('yo');

let scale = 1;
let text = 0;

const message = [
    "como que no",
    "porfa",
    "vai",
    "DALE",
    "te voy a dormir",
    "tu me odias de verdad",
    "ahora me voy a dormir yo",
    "POR QUE NO QUIERES VA A SER LINDO CONFIA",
    "onii chan",
    "si no te convenci con eso de pane que me rindo",
    "toco reinstalar lol",
    "tooooma ya no se ve el boton, soporta panzona"
]

/*increasing button size*/
activator.addEventListener('click', () =>{
    scale += 0.2;

    target.style.transform = `scale(${scale})`;

/*changing the message*/
    if (text < message.length - 1){
        text++;
    } else {
        text=0;
    }
    target.innerText = message[text];

/*anime girl if onii chan*/
    if (target.innerText === "onii chan") {
        image.src= "anime.png";
    } else {
        image.src = "yo.png";
    }

});
target.addEventListener('click', () => {
    console.log("Intentando redirigir...");
    window.location.href = "./menu.html";
    
    // O si quieres que funcione SOLO cuando aparezca "onii chan":
    /*
    if (target.innerText === "onii chan") {
        window.location.href = "./menu.html";
    }
    */
});

/*overlay*/
/* 1. Función que agrupa los pasos del tour */
function iniciarAyuda() {
    // Aquí puedes elegir qué elemento resaltar primero
    // Ejemplo: resaltamos la palabra "AQUI" o un botón
    moverTour('h1', '¡Hola! Soy tu guía. Estoy aquí para explicarte cómo funciona todo.');
}

/* 2. La función dinámica (se queda igual, pero asegúrate de que esté definida) */
function moverTour(selector, mensaje) {
    const target = document.querySelector(selector);
    const spotlight = document.getElementById('spotlight');
    const character = document.getElementById('character');
    const dialogue = document.querySelector('.dialogue-box p');
    const overlay = document.getElementById('tourOverlay');

    if (!target) return;

    overlay.style.display = 'block';

    const rect = target.getBoundingClientRect();

    // Posicionamos el spotlight
    spotlight.style.top = `${rect.top - 10}px`;
    spotlight.style.left = `${rect.left - 10}px`;
    spotlight.style.width = `${rect.width + 20}px`;
    spotlight.style.height = `${rect.height + 20}px`;

    // Cambiamos el texto
    dialogue.innerText = mensaje;

    // Posicionamos al personaje (Libertad total)
    // Usamos window.scrollY por si el usuario ha bajado en la página
    character.style.top = `${rect.bottom + window.scrollY + 20}px`;
    character.style.left = `${rect.left}px`;
}

function closeOverlay() {
    document.getElementById('tourOverlay').style.display = 'none';
}