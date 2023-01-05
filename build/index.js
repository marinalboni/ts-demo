"use strict";
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
