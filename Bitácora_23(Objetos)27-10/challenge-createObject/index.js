class Avion {
    constructor(modelo, asientos){
        this.modelo = modelo;
        this.asientos = asientos;
    }

    saludo(){
        console.log(`Bienvenidos al modelo ${this.modelo} que cuenta con capacidad para
        ${this.asientos} pasajeros`);
    }

}

let boing737 = new Avion ("Boeing 737", "156");
let airbusa320 = new Avion ("Airbus A320", "321");

console.log(boing737);
boing737.saludo();
console.log(airbusa320);
airbusa320.saludo();


