document.addEventListener("DOMContentLoaded", () => {
    const etapas = [
        {
            titulo: "20 peliculas juntos",
            texto: "Ya te estoy haciendo todo un cinefilo mamador uwu (SI, ERA CLAVE EMPEZAR CON EL CINE). Hemos visto un total de 3572 minutos o traducido en horas 59,53h de puro cine",
            imagenes: ["wrapped/cine.jpg"] // Siempre entre corchetes []
        },
        {
            titulo: "Peliculas favoritas",
            texto: "Nuestras peliculas favoritas de 2025. La mia es Mickey 17 y la tuya Marty Supreme. Stalkee tu letterbox y verga tu eres muy mamador nada tiene 5 estrellas, Marty me salvo la patria ASJAJSAJ",
            imagenes: ["wrapped/marty.jpg", "wrapped/mickey.jpg"]
        },
        {
            titulo: "#CadabraLovers",
            texto: "Hemos ido a cadabra 13 veces (aproximadamente, no puedo saber con certeza jeje) todos unos chicos que sus planes de salir de noche en finde son cadabra o cine AJSJAj, fokin tacos nos tenian babeando",
            imagenes: ["wrapped/cadabrat.jpg"]
        },
        {
            titulo: "Todos unos emos mafiosos",
            texto: "Tambien vimos series, como una pero bueno JASJAJ BerserkGod vale por 5 entiende",
            imagenes: ["wrapped/berserk.jpg"]
        },
        {
            titulo: "#Artistas",
            texto: "5 sesiones de dibujos, cada dia mas cerca de vivir de los furros uwu",
            imagenes: ["wrapped/arte.jpg"]
        },
        {
            titulo: "Juntitos xsiempre uwu",
            texto: "Este año nos hemos visto un total de 130 veces omg joder JSAJSJ (no muy accurate solo fue tomado este stat segun los 'voy' en telegram SAJSj). Muy feliz de cada minuto contigo multipliquemoslo el siguiente año uwu",
            imagenes: ["wrapped/juntos.jpg"]
        },
        {
            titulo: "En otra vida y EN ESTA",
            texto: "Amo mucho mi tiempo contigo, me gustas mucho y todos los dias son muy divertidos a tu lado. Este año ha sido un año de un poco de desarrollo de personaje como (bastante) desarrollo de relacion, estoy muy feliz porque en serio noto todos tus esfuerzos por estar conmigo y hacerme feliz y poco a poco van sanando las heridas uwu. Te amo y deseo pasar muchisimo tiempo mas contigo <3.",
            imagenes: ["wrapped/caracol.jpg"]
        }
    ];


    let pasoActual = 0;

    const boton = document.getElementById('next-btn');
    const titulo = document.getElementById('wrapped-title');
    const texto = document.getElementById('wrapped-text');
    const contenedorFotos = document.getElementById('image-container');

    // Función para renderizar imágenes
    function renderizarFotos(listaFotos) {
        contenedorFotos.innerHTML = ""; // Borra las fotos anteriores
        
        // Si hay más de una, añadimos una clase para el CSS
        if (listaFotos.length > 1) {
            contenedorFotos.classList.add('double-img');
        } else {
            contenedorFotos.classList.remove('double-img');
        }

        listaFotos.forEach(ruta => {
            const img = document.createElement('img');
            img.src = ruta;
            img.classList.add('wrapped-img');
            contenedorFotos.appendChild(img);
        });
    }

    if (boton) {
        boton.addEventListener('click', () => {
            if (pasoActual < etapas.length) {

                boton.innerText = "Continuar";
                // Cambiar textos
                titulo.innerText = etapas[pasoActual].titulo;
                texto.innerText = etapas[pasoActual].texto;
                
                // Cambiar fotos usando la función
                renderizarFotos(etapas[pasoActual].imagenes);

                pasoActual++;
            } else {
                alert("Ese es todo el wrapped muack, disfruta de las otras secciones ❤️");
                window.location.href = "menu.html";
            }
        });
    }
});