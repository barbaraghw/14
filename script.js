const activator = document.getElementById('nao');
const target = document.getElementById('shi');
const image = document.getElementById('yo');
const agendaBtn = document.getElementById('agenda');
const wrappedBtn = document.getElementById('wrapped');
const triviaBtn = document.getElementById('trivia');
const musicaBtn = document.getElementById('musica');

const botones = [
    { btn: musicaBtn, url: "./musica.html" },
    { btn: agendaBtn, url: "./agenda.html" },
    { btn: wrappedBtn, url: "./wrapped.html" },
    { btn: triviaBtn, url: "./trivia.html" }
];

document.addEventListener("DOMContentLoaded", () => {
    // Busca los elementos SOLO cuando el HTML ya existe

    if (agendaBtn) {
        agendaBtn.addEventListener('click', () => {
            window.location.href = "./agenda.html";
        });
    }

    if (wrappedBtn) {
        wrappedBtn.addEventListener('click', () => {
            window.location.href = "./wrapped.html";
        });
    }

    if (triviaBtn) {
        triviaBtn.addEventListener('click', () => {
            window.location.href = "./trivia.html";
        });
    }
    const musicaBtn = document.getElementById('musica');

    if (musicaBtn) { // Validación de seguridad
        musicaBtn.addEventListener('click', () => {
            window.location.href = "./musica.html";
        });
    }
});

const pasosTour = [
    { selector: 'h1', mensaje: 'HOLAA gracias por clickearme. Te voy a hacer una guia a la pagina aunque es obvio todo JSJASJ. Espero que te guste aunque sea humilde y recuerda que no tiene base de datos asi que la informacion importante (la agenda) me la tienes que decir jeje' },
    { selector: '#agenda', mensaje: 'Aqui puedes agendar tu cita que por default sera el domingo 15 de diciembre, sujeto a cambios (no la cambies ya me ilusione) y algunas ideas de cita para ver que podemos hacer, acepto propuestas.' },
    { selector: '#wrapped', mensaje: 'Hice una recopilacion de estadisticas de nuestra relacion desde el 14 de febrero hasta hoy jiji'},
    { selector: '#trivia', mensaje: 'Desde aqui podras encontrar como una trivia silly de cositas sobre nosotros, comparteme tus resultados <3', imagen: 'yomalo.png' },
    { selector: '#musica', mensaje: 'Creo que nunca nos hemos dedicado una cancion asi que aprovechare para recopilarte canciones que me recuerdan a ti (no porque sean tu sino mas como me siento contigo uwu)' },
    { selector: '#card-home', mensaje: 'Eso seria el fin del tutorial, espero que lo disfrutes este pequeño detallito, MUACK' }
];

let pasoActual = 0;
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

if (activator) {
    activator.addEventListener('click', () =>{
        scale += 0.2;
        target.style.transform = `scale(${scale})`;

        if (text < message.length - 1) text++;
        else text = 0;
        
        target.innerText = message[text];

        image.src = (target.innerText === "onii chan") ? "anime.png" : "yo.png";
    });
}

if (target) {
    target.addEventListener('click', () => {
        window.location.href = "./menu.html";
    });
}

botones.forEach(item => {
    if (item.btn) {
        item.btn.addEventListener('click', (e) => {
            // Verificamos si el tour está tapando el botón
            const overlay = document.getElementById('tourOverlay');
            if (overlay && overlay.style.display === 'block') {
                console.log("Tour activo, clic bloqueado");
                return;
            }
            
            console.log("Redirigiendo a: " + item.url);
            window.location.href = item.url;
        });
    }
});
/* Redirecciones seguras (Solo si el tour no está activo) */
function manejarRedireccion(btn, url) {
    if (btn) {
        btn.addEventListener('click', () => {
            const overlay = document.getElementById('tourOverlay');
            if (overlay && overlay.style.display === 'block') return;
            window.location.href = url;
        });
    }
}

manejarRedireccion(musicaBtn, "./musica.html");
manejarRedireccion(agendaBtn, "./agenda.html");
manejarRedireccion(wrappedBtn, "./wrapped.html");
manejarRedireccion(triviaBtn, "./trivia.html");
/*menu*/


/*overlay*/

/* 1. Función que agrupa los pasos del tour */
function iniciarAyuda() {
    pasoActual = 0; // Reiniciamos al primer paso
    ejecutarPaso();
}

function ejecutarPaso() {
    const paso = pasosTour[pasoActual];
    moverTour(paso.selector, paso.mensaje);

    const imgPersonaje = document.querySelector('#character img');
    if (paso.imagen) {
        imgPersonaje.src = paso.imagen; // Usa la imagen específica
    } else {
        imgPersonaje.src = 'yo.png'; // Vuelve a la imagen original por defecto
    }
    // Cambiamos el texto del botón del diálogo según el paso
    const btnEntendido = document.querySelector('.dialogue-box button');
    if (pasoActual === pasosTour.length - 1) {
        btnEntendido.innerText = "Finalizar";
        btnEntendido.onclick = closeOverlay;
    } else {
        btnEntendido.innerText = "Siguiente";
        btnEntendido.onclick = siguientePaso;
    }
}

function siguientePaso() {
    pasoActual++;
    if (pasoActual < pasosTour.length) {
        ejecutarPaso();
    } else {
        closeOverlay();
    }
}

/* 2. La función dinámica (se queda igual, pero asegúrate de que esté definida) */
function moverTour(selector, mensaje) {
    const el = document.querySelector(selector);
    const spotlight = document.getElementById('spotlight');
    const character = document.getElementById('character');
    const dialogue = document.querySelector('.dialogue-box p');
    const overlay = document.getElementById('tourOverlay');

    if (!el) return;

    overlay.style.display = 'block';
    const rect = el.getBoundingClientRect();
    const winH = window.innerHeight;
    const winW = window.innerWidth;

    dialogue.innerText = mensaje;

    // 1. Posicionar Spotlight (usando % para que sea responsive)
    // Agregamos un pequeño margen del 1% del ancho/alto
    spotlight.style.top = `${(rect.top / winH) * 100 - 1}vh`;
    spotlight.style.left = `${(rect.left / winW) * 100 - 1}vw`;
    spotlight.style.width = `${(rect.width / winW) * 100 + 2}vw`;
    spotlight.style.height = `${(rect.height / winH) * 100 + 2}vh`;

    // 2. Calcular posición del Personaje
    // El personaje mide aproximadamente un 25% del ancho de pantalla en móviles o 15% en PC
    const charWidth = character.offsetWidth;
    const charHeight = character.offsetHeight;

    let topPos = rect.top; // Alineado arriba con el elemento
    let leftPos = rect.left - charWidth - 20; // A la izquierda

    // 3. VALIDACIÓN DE LÍMITES (No salirse de la pantalla)
    
    // Si se sale por abajo:
    if (topPos + charHeight > winH - 20) {
        topPos = winH - charHeight - 20;
    }
    
    // Si se sale por arriba:
    if (topPos < 10) topPos = 10;

    // Si se sale por la izquierda:
    if (leftPos < 10) {
        leftPos = rect.right + 20; // Saltamos a la derecha
        // Si a la derecha también se sale:
        if (leftPos + charWidth > winW) {
            leftPos = (winW - charWidth) / 2; // Lo centramos
        }
    }

    // 4. Aplicar posiciones finales
    character.style.top = `${topPos}px`;
    character.style.left = `${leftPos}px`;
}

function closeOverlay() {
    document.getElementById('tourOverlay').style.display = 'none';
}
