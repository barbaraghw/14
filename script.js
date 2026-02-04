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

