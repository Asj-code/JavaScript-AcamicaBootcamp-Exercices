class Perro {
    constructor(nombre, estadoAdopcion, edad, color){
        this.nombre = nombre;
        this.estadoAdopcion = estadoAdopcion;
        this.edad = edad;
        this.color = color;
    }

    modificarEstadoDeAdopcion (nuevoEstado) {
        this.estadoAdopcion = nuevoEstado;
    }

    informarEstadoDeAdopcion () {
        return this.estadoAdopcion;
    }
}

let informacionNombre = prompt("Ingrese el nombre del perro");
let informacionEstado = prompt("Ingrese el estado de adopción del perro");
let informacionEdad = prompt("Ingrese la edad del perro");
let informacionColor = prompt("Ingrese el color del perro");

let perroNuevo = new Perro (informacionNombre, informacionEstado, informacionEdad, informacionColor);