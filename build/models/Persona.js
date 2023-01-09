"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Worker = exports.Persona = void 0;
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}`);
    }
}
exports.Persona = Persona;
class Worker extends Persona {
    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this.sueldo = sueldo;
    }
}
exports.Worker = Worker;
