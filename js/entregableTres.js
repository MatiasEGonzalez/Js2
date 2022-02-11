alert("Bienvenidos al Sorteo de un 0KM!");

let adivino = false;
let intentos = 0;




let seguirJuego = prompt("Desea participar? \nSi/NO");

while(seguirJuego != "EXIT" ){
   switch (seguirJuego) {
       case "si":
           
        for (let participantes = 1; participantes < 2; participantes++){
            let numeroSorteo = Math.floor(Math.random()*10);
            console.log(numeroSorteo);
            let nombre = prompt("Ingrese su nombre para participar por favor");
            if(nombre == ""){
            
            do{
                nombre = prompt("Ingrese su nombre para participar por favor");
             
            
            }while((nombre == "") || (nombre == Number ));
            
            }
            
            
            do{
                for(let nroIntentos = 1; nroIntentos <= 3; nroIntentos++){
            
                alert("tienes 3 intentos " + nombre +"! \nEste es el Intento Nro " + nroIntentos)
                let numeroSeleccionado = parseInt(prompt("Ingrese un Nro del 0 al 9"));
            if (numeroSeleccionado == numeroSorteo){
                    alert("Felicidades " + nombre + " te ganaste un 0KM!!");
                    adivino = true;
                    break;                   
                }
                intentos++;
                }
            }while ((adivino == false) && (intentos < 3));            
            
            if (adivino == false){
                alert("Segui participando " + nombre + "\nEl numero del sorteo era el " + numeroSorteo);
                              
            }            
            console.log("Participante Nro°" + participantes + "-" + nombre + "\nAdivino: " + adivino);
            }            
            break;
        case "no":
            alert("Game Over");
            break;
       default:
           alert("Ingresa una Opcion valida")
           break;
   }
   seguirJuego = prompt("Bienvenidos al sorteo de un 0KM \nDesea participar? \nSi/NO");
}
