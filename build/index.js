"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Estudiante_1 = __importDefault(require("./models/Estudiante"));
const cursos_mock_1 = require("./mock/cursos.mock");
const Persona_1 = require("./models/Persona");
// *****DECLARAR VARIABLES
// Builtin Types: string, number, boolean, void, null, undefined
var name = 'Marina';
// no se puede, da error por tipo -> name = 282;
let age = 29;
const gender = 'female';
// no se puede, da error porque es constante -> gender = 'male';
let surname = 'Böni';
// permine cualquier tipo y cambiar de tipo
let married = true;
let error;
error = true;
// let error 
// esa variable sería tipo any
// si vas a declarar una variable para luego cambiar su valor
// lo mejor es darle ya el tipo, si no, e de tipo ANY
// *****TIPOS MÁS COMPLEJOS
let list = ['Task1', 'Task2'];
let values = [false, 'Hola', 56];
let cualquiera = [false, 'Hola', 56, null, undefined];
// Enumerados
var State;
(function (State) {
    State[State["Completed"] = 0] = "Completed";
    State[State["Imcomplete"] = 1] = "Imcomplete";
    State[State["Pending"] = 2] = "Pending";
})(State || (State = {}));
let taskState = State.Completed; //Su valor es 0
var Position;
(function (Position) {
    Position["Manager"] = "M";
    Position["Senior"] = "S";
    Position["Junior"] = "J";
})(Position || (Position = {}));
let myPosition = Position.Junior; //Su valor es 'J'
// podemos crear variables que sigan interface Tarea
let tarea1 = {
    nombre: 'tarea1',
    estado: State.Completed,
    urgency: 1
};
let coche = {
    precio: 45000,
    nombre: 'Audi',
    year: 1993
};
// *****CONDICIONALES
console.log(coche.year > 2015 ? `${coche.nombre} es nuevo` : 'es viejo');
if (error) {
    console.log('hay error');
}
else {
    console.log('no hay error');
}
switch (tarea1.estado) {
    case State.Completed:
        console.log('tarea completada amore');
        break;
    case State.Pending:
        console.log('tarea esta pendiente');
        break;
    default:
        console.log('tarea NOOO completada amore');
        break;
}
// *****BUCLES
let listaTareaNueva = [
    {
        nombre: 'Limpiar la casa',
        estado: State.Imcomplete,
        urgency: 10
    },
    {
        nombre: 'Cocinar',
        estado: State.Pending,
        urgency: 5
    },
    {
        nombre: 'Ver tv',
        estado: State.Completed,
        urgency: 1
    }
];
// ForEach
listaTareaNueva.forEach((tarea, index) => {
    console.log(`${index}: ${tarea.nombre}`);
});
// map
listaTareaNueva.map((tarea, index) => {
    console.log(`${index}: ${tarea.nombre}`);
});
// for
for (let i = 0; i < listaTareaNueva.length; i++) {
    console.log(`${i}: ${listaTareaNueva[i].nombre}`);
}
// *****INSTANCIACIÓN MULTIPLE DE VARIABLES
let a, b, c; //3 variables de tipo any
let d, e, f; //3 variables tipadas
// ***** FUNCIONES
function sayHi(name) {
    console.log(`Hello world, my name is ${name}`);
}
sayHi('Marina');
//sayHi(1993);
//no funcionaria porque es un numero
function sum(num1, num2) {
    console.log(num1 + num2);
}
sum(2, 58.5);
function despedirPersona(nombre = 'Jesus') {
    console.log(`Adios ${nombre}`);
}
despedirPersona();
//parámetro opcional
function despedidaOpcional(nombre) {
    if (nombre) {
        console.log(`Adiós ${nombre}`);
    }
    else {
        console.log(`Adiós`);
    }
}
despedidaOpcional(); //Adiós
despedidaOpcional('Amanda'); //Adiós Amanda
function variosParams(nombre, apellidos, edad = 18) {
    console.log('é nóis');
}
;
variosParams('Marina');
variosParams('Marina', 'Laporte');
variosParams('Marina', undefined, 29);
variosParams('Marina', 'Laporte', 29);
function variosTipos(a) {
    if (typeof (a) === 'string') {
        console.log('a es una string');
    }
    else if (typeof (a) === 'number') {
        console.log('a es un numero');
    }
    else {
        console.log('no se que es a');
        throw Error('a no es number ni string');
    }
}
//para retornar un tipo especifico se hace así:
function ejemploReturn(nombre, apellidos) {
    return `${nombre} ${apellidos}`;
}
//para devolver mas de un tipo
//para retornar un tipo especifico se hace así
// function ejemploReturn(nombre: string, apellidos: string): string|number {
//     return `${nombre} ${apellidos}`
// }
// si no devuelve nada (por ej devuelve un console.log), su tipo es void
// function name(params:type):void {
//     console.log('bla')
// }
//si no sé cuantos parametros va a recibir
function ejemploMultiParam(...nombres) {
    nombres.forEach(nombre => {
        console.log(nombre);
    });
}
//podría recibir varios parametros o un spread array
const lista = ['marina', 'amanda', 'renan'];
ejemploMultiParam(...lista);
ejemploMultiParam('marina', 'amanda', 'renan');
//así va a recibir solo un parametro, que es un array
function ejemploArrParam(nombres) {
    nombres.forEach(nombre => {
        console.log(nombre);
    });
}
const lista2 = ['marina', 'amanda', 'renan'];
ejemploArrParam(lista2);
let empleadoMarina = {
    nombre: 'Marina',
    apellidos: 'Boni',
    edad: 29
};
//arrow functions
const mostrarEmpleado = (empleado) => {
    return `${empleado.nombre} tiene ${empleado.edad} años`;
};
mostrarEmpleado(empleadoMarina);
const pagarSalario = (empleado, cobrarSalario) => {
    if (empleado.edad > 70) {
        return; //no hace nada
    }
    else {
        cobrarSalario(); //llama a la callback que recibió de parametro
    }
};
const quieroCobrar = () => 'Yo cobrooooo mi salario';
pagarSalario(empleadoMarina, quieroCobrar);
pagarSalario(empleadoMarina, () => 'quiero cobrar mi sueldo');
// ***** FUNCIONES ASYNC
function ejemploAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log('tarea a completar antes de seguir');
        //cuando terminar await, sigue las siguientes lineas
        return 'completado';
    });
}
ejemploAsync()
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log('todo ha terminado'));
// ***** FUNCIONES GENERADORAS - GENERATORS (asterisco)
function* ejemploGenerator() {
    //yield
    let index = 0;
    while (index < 5) {
        //emitimos un valor
        yield index++;
    }
}
//guardamos la funcion generadora en una variable
let generadora = ejemploGenerator();
//luego accedemos a los valores emitidos
console.log(generadora.next().value); //0
console.log(generadora.next().value); //1
console.log(generadora.next().value); //2
console.log(generadora.next().value); //3
//worker
function* watcher(valor) {
    yield valor; //emitimos el valor inicial
    yield* worker(valor); //llamamos a worker
    yield valor + 4; //emitimos el valor final
}
function* worker(valor) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}
let generatorSaga = watcher(0);
console.log(generatorSaga.next().value); //0 (lo ha hecho el watcher)
console.log(generatorSaga.next().value); //1 (worker)
console.log(generatorSaga.next().value); //2 (worker)
console.log(generatorSaga.next().value); //3 (worker)
console.log(generatorSaga.next().value); //4 (watcher)
// *****SOBRECARGA DE FUNCIONES
function mostrarError(error) {
    console.log('Ha habido un error:', error);
}
// *****PERSISTENCIA DE DATOS
//1. Local Storage - almacena los datos en el navegador (no se eliminan automaticamente);
//2. Session Storage - los datos se guardan en la sesión del navegador (se eliminan cuando se termina la sesión del navegador);
//3. Cookies - tienen fecha de caducidad y tienen un ambito de URL;
// Local Storage y Session Storage
function guardarLS() {
    localStorage.setItem('nombre', 'Marina'); //clave, valor
}
function leerLS() {
    let blabla = localStorage.getItem('nombre'); //clave
}
//Cookies con npm cookies-utils 
//import { setCookie, deleteCookie } from 'cookies-utils';
const cookieOptions = {
    name: "user",
    value: "Marina",
    maxAge: 10 * 60,
    path: "/", // optional string,
};
//setCookie(cookieOptions);
//deleteCookie('user')
// ***** GESTIÓN DE LOS EVENTOS
class Temporizador {
    empezar() {
        setTimeout(() => {
            if (!this.terminar)
                return; //comprobamos que la función terminar existe (ya que es opcional) //if return
            this.terminar; //else ejecuta terminar
        }, 10000);
    }
}
const miTemporizador = new Temporizador();
// definir la funcion del callback a ejecutar cuando termine el tiempo
miTemporizador.terminar = () => {
    console.log('Evento terminado');
};
// lanzamos el temporizador
miTemporizador.empezar(); //iniciará el timeout
// ***** CLASES
//en otros archivos
//Creamos un curso
const listaCursos = cursos_mock_1.LISTA_CURSOS;
const estudiante1 = new Estudiante_1.default('Marina', listaCursos, 'Böni');
console.log(`${estudiante1.name} estudia ${estudiante1.cursos.forEach((curso) => curso.nombre)}`);
//Saber horas estudias por estudiante1
estudiante1.horasEstudiadas; //number
//saber la instancia de un objeto/variable
// - TypeOf - chequea el tipo primitivo (string, boolean, number, object)
// - InstanceOf - chequea si es de una class
let fecha = new Date(1993, 5, 10);
if (fecha instanceof Date) {
    console.log('es una instancia de Date');
}
let worker1 = new Persona_1.Worker('Amanda', 'Linda', 30, 1600);
worker1.saludar();
