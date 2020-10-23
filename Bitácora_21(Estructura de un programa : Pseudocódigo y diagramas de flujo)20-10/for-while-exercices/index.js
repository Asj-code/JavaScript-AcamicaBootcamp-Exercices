// For - While Syntax

//for

var mostrar = "Mesaje";

for(var i = 0; i <= 9; i++){
    alert(mostrar + " " + i);
}

//while

var mostrar = "Mesaje";
var i = 1;

while(i <= 10){
    alert(mostrar + " " + i);
    i++;
}


/* Pseudocode

Solicita un usuario y contrasena
Crea una funcion para validar que los datos ingresados son correctos
Si son correctos corta la ejecucion del ciclo
Si son incorrectos vuelve a solicitar usuario y contraseña
*/

const USER = "pepe";
const PASSWORD = "12345";

function userValidate (user, password) {

    return user === USER && password ===PASSWORD;
}

console.log(userValidate("pepe", "12345"));



// Calcular suma y promedio
let counter = 0;

for(i = 0; i < 5; i++){
    let number = parseInt(prompt("Ingrese un numero: "));
    counter += number;
}

alert("la suma de los numeros es " + counter);



// Calcular edad

let edad = parseInt(prompt("ingrese una edad: "));
let resultado = 0;

while(edad !== 0) {
    if(edad > 18){
        resultado += 1;
    }
    edad = parseInt(prompt("ingrese una edad: "));
}

console.log(resultado);


// Calcular promedio condicional

let dato = prompt("Ingrese un número: ");
let suma = 0;
let contador = 0;


while(dato !== "salir"){
    let numero = parseInt(dato);
    if(numero > 0 && numero < 10){
        suma = suma + numero;
        contador ++;
    }

    dato = prompt("Ingrese un número: ");
}

if(contador == 0){
    var promedio = 0;
}else {
    var promedio = suma / contador;
}

console.log(promedio);


// Ejercicio 5

let numero = parseInt(prompt("Ingrese un número: "));
let par = 0;
let impar = 0;

while(numero !== 0){
    if(numero % 2 == 0){
        par += 1;
        console.log(par);
    }else {
        impar += 1;
        console.log(impar);
    }
    numero = parseInt(prompt("Ingrese un número: "));
}

switch (true) {
  case par == impar:
    console.log("Misma cantidad de ingresos");
    break;
  case par > impar:
    console.log("Par tiene mas ingresos");
    break;
  default:
    console.log("Impar tiene mas ingresos");
    break;
}



/* Otra manera de resolverlo en lugar de usar switch

if(par > impar && par !== 0){
    console.log("Los pares tienen más ingresos");
}else if (impar > par && impar !== 0){
    console.log("Los impares tienen más ingresos");
}else if(par == impar){
    console.log("Los ingresos son iguales en ambos");
}else {
    console.log(resultado);
}
*/

// Ejercicio 6

let numero = parseInt(prompt("Ingrese un número: "));

  switch (numero) {
    case 1:
      console.log("A");
      break;
    case 2: 
      console.log("B");
      break;
    case 3:
      console.log("C");
      break;
    case 4:
      console.log("D");
      break;
    case 5: 
      console.log("E");
      break;
    case 6: 
      console.log("F");
      break;
    case 7: 
      console.log("G");
      break;
    case 8: 
      console.log("H");
      break;
    case 9: 
      console.log("I");
      break;
    case 10: 
      console.log("J");
      break;
    default:
      console.log("Error");
  }
