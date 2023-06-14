console.log("soy el ejercicio Dos")

var contadorDeTiempo =0;

function mostrarContador(){
    contadorDeTiempo++;
    console.log('Este es el segundo'+ contadorDeTiempo)
}

setInterval(mostrarContador,1000)