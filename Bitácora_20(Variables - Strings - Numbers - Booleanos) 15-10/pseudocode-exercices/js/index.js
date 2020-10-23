/* Pseudocode

Ejercicio I llega? 
km = solicito al usuario cuantos km recorrerá
verifico que haya ingresado tipo de dato correcto
lts = total de lts de capacidad del tanque (45lts)
lts2 = total de lts consumidos cada 15km
total de distancia completa = km / lts2

calcular: si el combustible no será sufuciente
aviso que le faltará combustible para completar el recorrido,
de lo contrario no aviso.

Ejercicio II cuántos tanques de nafta?
motor = 1.6, 1.8, 2.0
consumo = 15km x lt, 12km x lt, 10km x lt
capacidad del tanque = 50 lts

preguntar al usuario cuantos kms recorrerá y que motor usará
verificar que los tipos de datos sean correctos
calcular cuantos tanques consumirá en su recorrido
tanques necesarios = kmts que recorrerá / consumo del motor que usará
indicarle al usuario cuantos tanques necesitará

Ejercicio III dial de radio
pedir al usuario que ingrese un dial de radio 
validar que sea el tipo de dato correcto
validar que el dial sea impar 
validar que sea mayor o igual a 89.9
validar que sea menor a 107.9

Ejercicio IIII Tranferencia bancaria
dinero a tranferir = Solicitar al usuario source la cantidad de dinero que quiere tranferir
validar que tenga fondos para enviar el dinero
persona a tranferir = Solicitar a quien desea tranferir el dinero
validar que el destinatario exista 
si todos los datos son correctos mostrar "transacción exitosa"

*/



//Llega?

//Capacidad del tanque en litros
let capacidadDelTanque = 45;

//Consumo cada 15 kilómetros recorridos
let kilometrosPorLitro = 15;

//Solicito al usuario cuántos kms recorrerá
let kilometrosPorRecorrer = parseInt(prompt("Cuántos kilómetros recorrerá?: "));

//Verifico que haya ingresado tipo de dato correcto
if(!isNaN(kilometrosPorRecorrer)){
    //Calculo cuántos tanques de combustible necesitará
    if(kilometrosPorRecorrer/kilometrosPorLitro < 45){
        alert("Necesitará 1 tanque de combistible");
    }else {
        alert("Necesitará reabastecerse");
    }

}else {
    alert("ingrese un dato valido");
}

//Cuántos tanques de nafta?

let motor1 = 15;
let motor2 = 12;
let motor3 = 10;

let capacidadDelTanque = 50;

let kilometrosPorRecorrer = parseInt(prompt("Cuántos kilómetros recorrerá?: "));
let modeloDeAuto = parseInt(prompt("Qué modelo de auto utilizará 1, 2 o 3?"));

let cuantoNecesitará = kilometrosPorRecorrer / modeloDeAuto;

if(!isNaN(kilometrosPorRecorrer) && !isNaN(modeloDeAuto)){
    
    if(cuantoNecesitará < 50){
        alert("Necesitará 1 tanque de nafta");
    }else {
        alert("Necesitará más de un tanque de nafta");
    }

}else {
    alert("ingrese un dato valido");
}


//Dial de radio

let dialDeRadio = parseInt(prompt("Ingrese un dial de radio: "));

if(!isNaN(dialDeRadio)){
    if(dialDeRadio % 2 == 0 && dialDeRadio >= 89.9 && dialDeRadio < 107.9){
        alert(dialDeRadio);
    }else{
        alert("El dial no cumple con las condiciones");
    }
}else {
    alert("Ingrese un dial de radio valido");
}

//Tranferencia bancaria


//Verifico que el usuario tenga fondos suficientes
let fondosSuficientes = 1000;

//Solicito al usuario source su nombre
let usuarioSource = prompt("Ingrese nombre de usuario: ");

//Solicito al usuario source el nombre del destinatario de la tranferencia
let destinatario = prompt("Ingrese nombre del destinatario: ");

//Valido que el usuario exista y que los fondos sean suficientes
if(usuarioSource && destinatario){
    var montoATranferirir = parseInt(prompt("Cuánto dinero desea tranferir?: "));
    if(!isNaN(montoATranferirir) &&  montoATranferirir < fondosSuficientes){
        alert("Transferencia exitosa");
    }else {
        alert("Fondos insuficientes");
    }
}else {
    alert("El usuario no existe");
}



