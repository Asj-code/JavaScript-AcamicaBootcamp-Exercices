/**
 * Solicitar al visitante que ingrese su nombre de usuario.
 * Almacenar el nombre de usuario ingresado el una función.
 * Escenario 1: El nombre no está en la lista.
 * Darle la bienvenida al nuevo usuario 
 * Escenario 2: El nombre de usuario existe. 
 * Dar un aviso al usuario que el nombre de usuario se encuentra en uso 
 * Utilizar una función con try / catch para realizar la validación.
 */
class Usuario {
    constructor (nombre, apellido, email, usuario, contrasena, estado){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.estado = estado;
    }
    
}

let usuarios = [
    new Usuario ("Angel","Verdu", "algunemail@algo.com", "angelv", "12344", false),
    new Usuario ("Alejandro","Perez", "mailperez@algo.com", "angelwww","126784", true)
];

let addUser = () => {
  
    let user = prompt("Ingrese nombre de usuario");
    
    
    // validar que el nombre no este en la lista
    console.log(user);
    try {
        
        if (!user) {
            throw new Error("Debe ingresar un nombre de usuario");
            
        }
        for (let i = 0; i < usuarios.length; i++) {
            if (user === usuarios[i].usuario) {
                alert(`Bienvenido ${user}`);
            }
        }
        
        
    } catch (error) {
        alert(error);
    }
}
addUser();




/* 
let infoNombre = prompt("Ingrese su nombre");
let infoApeliido = prompt("Ingrese su apellido");
let infoEmail = prompt("Ingrese su email");
let infoUsuario = prompt("Ingrese su usuario");
let infoContrasena = prompt("Ingrese su contrasena");
let infoEstado = prompt("Ingrese su estado");
*/



const primerNumero = prompt('Ingrese un numero: ');


if (primerNumero > 10){
    let segundoNumero = prompt('Ingrese un numero: ');
    if (segundoNumero > 100){
        console.log('A');
    }else {
        console.log('B');
    }
}else {
    let otroNumero = prompt('Ingrese un numero: ');
    if (otroNumero > 1000){
        console.log('C');
    }else {
        console.log('D');
    }
}

console.log(primerNumero);


let radio = prompt('Ingrese el radio de un circulo: ');
const diametro = radio * 2;

console.log(diametro);


