"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Estudiante {
    //propriedades pueden ser publicas o privadas - las privadas no son accesibles desde fuera - por defecto son puclic
    //solo accesibles a traves de getter o setter
    constructor(name, cursos, apellidos) {
        this.ID = 'X123457';
        this.name = name;
        if (apellidos) {
            this.apellidos = apellidos;
        }
        this.cursos = cursos;
    }
    //Propriedades - no son funciones - a la hora de llamarla no ponemos ()
    //get, set
    get horasEstudiadas() {
        let horasEstudiadas = 0;
        this.cursos.forEach((curso) => {
            horasEstudiadas += curso.horas;
        });
        return horasEstudiadas;
    }
    get IDEstudiante() {
        return this.ID;
    }
    set changeIDEstudiante(id) {
        this.ID = id;
    }
}
exports.default = Estudiante;
