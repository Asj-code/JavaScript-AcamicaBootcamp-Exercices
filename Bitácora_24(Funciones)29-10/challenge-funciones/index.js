/*
Escribe una función arrow que reciba como parámetro un array 
y calcule el promedio de los elementos tipo numérico.
*/ 

let arrayOfNumbers = [2, 5, 8, 9, 4];

const suma = arrayOfNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

let promedio = suma / arrayOfNumbers.length;

console.log(promedio);
