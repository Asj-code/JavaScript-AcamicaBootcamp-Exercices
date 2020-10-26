let frutas = ["Peras", "Manaznas", "Sandias", "Pomelos"];
let i = 0;

while(i < frutas.length){
    console.log(frutas[i]);
    i++;
};

let numeroIngresado = prompt("ingrese un numero");


/* Ingresar mediante prompt números indefinidamente hasta
que el usuario ingrese "STOP".
Almacenar todos los datos en un array y mostrarlos al final.
STOP debe quedar fuera del array.
*/

// Stop

let arrayDeNumerosIngresados = [];
let numeroIngresado;

while(numeroIngresado != "STOP"){
    numeroIngresado.push(arrayDeNumerosIngresados);
    numeroIngresado = prompt("Ingrese un número: ");
}

console.log(arrayDeNumerosIngresados - 1);


/* Ingresar mediante prompt números indefinidamente hasta
que el usuario ingrese 0.
Crear un array para los números pares, un array para los números impares y 
otro para almacenar datos no numéricos. Mostrar los resultados al finalizar 
el ciclo.
0 debe quedar fuera de los arrays.
*/

let numeroIngresado = prompt("Ingrese un número: ");
let arrayDeNumerosPares = [];
let arrayDeNumeroImpares = [];
let arrayDeDatosNoNumericos= [];

while(numeroIngresado != 0){
    switch (true) {
        case numeroIngresado % 2 == 0:
            arrayDeNumerosPares.push(numeroIngresado);
            break;
        case numeroIngresado % 2 == 1:
            arrayDeNumeroImpares.push(numeroIngresado);
            break;
        default:
            arrayDeDatosNoNumericos.push(numeroIngresado);
    }
    numeroIngresado = prompt("Ingrese un número: ");
}

console.log("Los números pares son: " ,arrayDeNumerosPares);
console.log("Los números impares son: " ,arrayDeNumeroImpares);
console.log("Los datos no numéricos son: " ,arrayDeDatosNoNumericos);

/* Ingresar mediante prompt números indefinidamente hasta
que el usuario ingrese 0.
Almacenar en un array solamente los números.
Eliminar del array el número más alto y el más bajo.
Si el más alto y el más bajo se repiten solo eliminarlos una vez.
*/

let numeroIngresado = parseInt(prompt("Ingrese un número: "));
let arrayDeNumeros = [];

while(numeroIngresado !== 0){
    if(!isNaN(numeroIngresado)){
        arrayDeNumeros.push(numeroIngresado);
    }
    numeroIngresado = parseInt(prompt("Ingrese un número: "));
}

let numerosOrdenados = arrayDeNumeros.sort();
console.log(numerosOrdenados);

let arraySinElMenorNiElMayor = numerosOrdenados.splice(0,2);
console.log(numerosOrdenados);


/* Ingresar mediante prompt números indefinidamente hasta
que el usuario ingrese 0.
Almacenar cada ingreso en una posición del array.
Al finalizar dividir la cantidad de elementos en 3 arrays iguales.
*/

let data = prompt("Ingrese un número: ");
let array = [];
let i = 0;

// Valido que el usuario no haya ingresado 0
while(data != 0){
    array[i] = data;
    i++;
    data = prompt("Ingrese un número: ");
}

// Obtengo la cant de elementos en el array
let elementsInArray = array.length;
console.log(elementsInArray);

// Creo una variable con el nuevo array vacía para luego ir llenando con los elementos dependiendo el caso
let newArray;

switch (true) {
    case elementsInArray % 3 == 0:
        //En este caso el array original va a ser dividido por 3
        newArray = array;
        break;
    case elementsInArray % 3 == 1:
        //En este caso, elimino el primer elemento del array ya que la cantidad es impar
        newArray = array.slice(1, elementsInArray);
        break;
    case elementsInArray % 3 == 2:
        //En este caso, elimino el primer y último elemento
        newArray = array.slice(1, elementsInArray - 1);
        break;
    default:
        console.log("error");
}

//Al nuevo array lo divido por 3 y creo 3 nuevos arrays con la misma catidad de elementos
let arrayDivision = newArray.length / 3;
let newArray1 = newArray.slice(0, arrayDivision);
let newArray2 = newArray.slice(arrayDivision, arrayDivision * 2);
let newArray3 = newArray.slice(arrayDivision * 2, arrayDivision * 3);
console.log(newArray1, newArray2, newArray3);