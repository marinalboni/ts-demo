export class Persona {
    nombre: string;
    apellido: string;
    edad: number;

    constructor(nombre: string, apellido: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    saludar() : void {
        console.log(`Hola, me llamo ${this.nombre}`)
    }
}




export class Worker extends Persona {
    sueldo: number;

    constructor(nombre: string, apellido: string, edad: number, sueldo: number) {
        super(nombre, apellido, edad);
        this.sueldo = sueldo;        
    }

    //puede acceder al metodo saludar() - herencia de la clase Persona
}