let nombre = prompt('Ingrese su nombre para comenzar o ingrese SALIR para salir del juego');
let puntos = 0;
function juego() {
    while (nombre.toUpperCase() !== 'SALIR') {
        let preguntaUno = parseInt(prompt("Hola! " + nombre + "\n Ingrese la opcion correcta \n¿Cuál es el país más grande del mundo por superficie terrestre? \n 1-Canadá\n 2-Rusia\n 3-China"))
        if (preguntaUno == 2) {
            puntos = puntos + 1;
            alert("Felicitaciones ganaste un punto!")
        }
        else if (preguntaUno === '' || preguntaUno === isNaN || preguntaUno === 'undifined' || preguntaUno >= 4) {
            alert("Debe responder con 1, 2 o 3 \n Usted perdio el turno \nTienes " + puntos + " puntos.");
        }
        else if (preguntaUno == 2 || preguntaUno == 3) {
            alert("Respuesta incorrecta  \n Respuesta correcta 2- Rusia \nTienes " + puntos + " puntos.");
        }
        else if (preguntaUno !== 'SALIR') {
            console.log("Gracias por jugar con nosotros");
            break;
        }

        let preguntaDos = prompt("Ingrese la opcion correcta \n¿Cuál es el río más largo del mundo? \n 1-Amazonas\n 2-Nilo\n 3-Yangtsé")
        if (preguntaDos == 2) {
            puntos = puntos + 1;
            alert("Felicitaciones ganaste un punto! \nTienes " + puntos + " puntos.")
        }
        else if (preguntaDos === '' || preguntaDos === isNaN || preguntaDos === 'undifined' || preguntaDos >= 4) {
            alert("Debe responder con 1, 2 o 3 \n Usted perdio el turno \n Tienes " + puntos + " puntos.");
        }
        else if (preguntaDos == 1 || preguntaDos == 3) {
            alert("Respuesta incorrecta  \n Respuesta correcta 2- Nilo \n Tienes " + puntos + " puntos.");
        }
        else if (preguntaDos !== 'SALIR') {
            console.log("Gracias por jugar con nosotros");
            break;
        }

        let preguntaTres = prompt("Ingrese la opcion correcta \n¿Cuál es la capital de Australia? \n 1-Sídney\n 2-Melbourne\n 3-Canberra")
        if (preguntaTres == 3) {
            puntos = puntos + 1;
            alert("Felicitaciones ganaste un punto! \nTienes " + puntos + " puntos." ) 
        }
        else if (preguntaTres === '' || preguntaTres === isNaN || preguntaTres === 'undifined' || preguntaTres >= 4) {
            alert("Debe responder con 1, 2 o 3 \n Usted perdio el turno \n Tienes " + puntos + " puntos.");
        }
        else if (preguntaTres == 1 || preguntaTres == 2){
            alert("Respuesta incorrecta  \n Respuesta correcta 2- Canberra \n Tienes " + puntos + " puntos.");
        }
        else if (preguntaTres !== 'SALIR') {
            console.log("Gracias por jugar con nosotros");
            break;
        }

        let preguntaCuatro = prompt("Ingrese la opcion correcta \n¿Cuál es el país con la mayor población del mundo? \n 1-India\n 2-Estados Unidos\n 3-China")
        if (preguntaCuatro == 3) {
            puntos = puntos + 1;
            alert("Felicitaciones ganaste un punto! \nTienes " + puntos + " puntos.")
        }
        else if (preguntaCuatro === '' || preguntaCuatro === isNaN || preguntaCuatro === 'undifined' || preguntaCuatro >= 4) {

            alert("Debe responder con 1, 2 o 3 \n Usted perdio el turno \n Tienes " + puntos + " puntos.");
        }
        else if (preguntaCuatro == 1 || preguntaCuatro == 2){
            alert("Respuesta incorrecta  \n Respuesta correcta 3- China \n Tienes " + puntos + " puntos.");
        }
        else if (preguntaCuatro !== 'SALIR') {
            console.log("Gracias por jugar con nosotros");
            break;
        }

        let preguntaCinco = prompt("Ingrese la opcion correcta \n¿Cuál es el océano más grande del mundo? \n 1-Océano Pacífico\n 2-Océano Atlántico\n 3-Océano Índico")
        if (preguntaCinco == 1) {
            puntos = puntos + 1;
            alert("Felicitaciones ganaste un punto! " + puntos + " puntos.")
        }
        else if (preguntaCinco === '' || preguntaCinco === isNaN || preguntaCinco === 'undifined' || preguntaCinco >= 4) {

            alert("Debe responder con 1, 2 o 3 \n Usted perdio el turno \n Tienes " + puntos + " puntos.");
        }
        else if (preguntaCinco == 2 || preguntaCinco == 3){
            alert("Respuesta incorrecta  \n Respuesta correcta 1-Océano Pacífico \n Tienes " + puntos + " puntos.");
        } break;
    }
}

juego();
let finalDeJuego = confirm("Felicitaciones " + nombre + " ganaste " + puntos + " puntos.\n ¿Queres jugar de nuevo?");
if (finalDeJuego === true) {
    juego();
} else {
    alert("Gracias por jugar!");
}
