export class Curso { //se importa con {} - tienen que llamarlo así después de exportar
    //propriedades de la clase
    nombre: string;
    horas: number;

    //constructor
    constructor(nombre: string, horas: number) {

        //inicializamos las propriedades
        this.nombre = nombre;
        this.horas = horas;
    }
}



//export default Curso;  ----> así se exportaria sin {} y la persona podría llamarlo como quiera