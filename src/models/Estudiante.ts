import { Curso } from "./Curso";

export default class Estudiante {
    name: string;
    apellidos?: string;
    cursos: Curso[];

    private ID: string = 'X123457'
    //propriedades pueden ser publicas o privadas - las privadas no son accesibles desde fuera - por defecto son puclic
    //solo accesibles a traves de getter o setter

    constructor(name: string, cursos: Curso[], apellidos?: string) { //las opcionales siempre van al final
        this.name = name;
        if(apellidos) {
            this.apellidos = apellidos;
        }
        this.cursos = cursos;
    }


    //Propriedades - no son funciones - a la hora de llamarla no ponemos ()
    //get, set
    get horasEstudiadas(): number {
        let horasEstudiadas: number = 0;

        this.cursos.forEach((curso: Curso) => {
            horasEstudiadas += curso.horas
        })

        return horasEstudiadas
    }

    get IDEstudiante(): string {
        return this.ID
    }

    set changeIDEstudiante(id: string) {
        this.ID = id
    }

}