"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
class Curso {
    //constructor
    constructor(nombre, horas) {
        //inicializamos las propriedades
        this.nombre = nombre;
        this.horas = horas;
    }
}
exports.Curso = Curso;
//export default Curso;  ----> así se exportaria sin {} y la persona podría llamarlo como quiera
