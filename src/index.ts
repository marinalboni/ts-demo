// *****DECLARAR VARIABLES
// Builtin Types: string, number, boolean, void, null, undefined

var name: string = 'Marina';
// no se puede, da error por tipo -> name = 282;

let age: number = 29;

const gender: string = 'female';
// no se puede, da error porque es constante -> gender = 'male';

let surname: any = 'Böni'
// permine cualquier tipo y cambiar de tipo

let married: boolean = true;

let error: boolean;
error = true;
// let error 
// esa variable sería tipo any
// si vas a declarar una variable para luego cambiar su valor
// lo mejor es darle ya el tipo, si no, e de tipo ANY


// *****TIPOS MÁS COMPLEJOS

let list: string[] = ['Task1', 'Task2'];

let values: (string | number | boolean)[] = [false, 'Hola', 56];

let cualquiera: any[] = [false, 'Hola', 56, null, undefined];

// Enumerados
enum State {
    'Completed',
    'Imcomplete',
    'Pending'
}

let taskState: State = State.Completed; //Su valor es 0

enum Position {
    'Manager' = 'M',
    'Senior' = 'S',
    'Junior' = 'J'
}

let myPosition: Position = Position.Junior //Su valor es 'J'

// Interfaces
interface Tarea {
    nombre: string,
    estado: State,
    urgency: number
}

// podemos crear variables que sigan interface Tarea
let tarea1: Tarea = {
    nombre: 'tarea1',
    estado: State.Completed,
    urgency: 1
}

// *****TYPES DE TYPESCRIPT
//palabra reservada type

type Product = {
    precio: number,
    nombre: string,
    year: number
}

let coche: Product = {
    precio: 45000,
    nombre: 'Audi',
    year: 1993
}

// *****CONDICIONALES

console.log(coche.year > 2015 ? `${coche.nombre} es nuevo` : 'es viejo');

if(error) {
    console.log('hay error')
} else {
    console.log('no hay error')
}

switch (tarea1.estado) {
    case State.Completed:
        console.log('tarea completada amore')
        break;
    case State.Pending:
        console.log('tarea esta pendiente')
        break;
    default:
        console.log('tarea NOOO completada amore')
        break;
}

// *****BUCLES

let listaTareaNueva: Tarea[] = [
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
]

// ForEach
listaTareaNueva.forEach((tarea: Tarea, index: number) => {
    console.log(`${index}: ${tarea.nombre}`)
})

// map
listaTareaNueva.map((tarea: Tarea, index: number) => {
    console.log(`${index}: ${tarea.nombre}`)
})

// for
for (let i = 0; i < listaTareaNueva.length; i++) {
    console.log(`${i}: ${listaTareaNueva[i].nombre}`)
}


// *****INSTANCIACIÓN MULTIPLE DE VARIABLES
let a, b, c; //3 variables de tipo any
let d:string, e:boolean, f:number //3 variables tipadas



// ***** FUNCIONES

function sayHi(name: string) {
    console.log(`Hello world, my name is ${name}`);
}

sayHi('Marina');
//sayHi(1993);
//no funcionaria porque es un numero

function sum(num1:number, num2:number) {
    console.log(num1 + num2);
}

sum(2, 58.5);

function despedirPersona(nombre: string = 'Jesus') {
    console.log(`Adios ${nombre}`)
}

despedirPersona();

//parámetro opcional
function despedidaOpcional(nombre?: string) {
    if(nombre) {
        console.log(`Adiós ${nombre}`)
    } else {
        console.log(`Adiós`)
    }
}

despedidaOpcional(); //Adiós
despedidaOpcional('Amanda'); //Adiós Amanda

function variosParams(nombre:string, apellidos?:string, edad:number = 18) {
    console.log('é nóis')
};

variosParams('Marina');
variosParams('Marina', 'Laporte');
variosParams('Marina', undefined, 29);
variosParams('Marina', 'Laporte', 29);

function variosTipos(a: string | number) {
    if(typeof(a) === 'string') {
        console.log('a es una string')
    } else if (typeof(a) === 'number') {
        console.log('a es un numero')
    } else {
        console.log('no se que es a')
        throw Error('a no es number ni string')
    }
}

//para retornar un tipo especifico se hace así:
function ejemploReturn(nombre: string, apellidos: string): string {
    return `${nombre} ${apellidos}`
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
function ejemploMultiParam(...nombres: string[]) {
    nombres.forEach(nombre => {
        console.log(nombre)
    });
}

//podría recibir varios parametros o un spread array
const lista = ['marina', 'amanda', 'renan']
ejemploMultiParam(...lista);
ejemploMultiParam('marina', 'amanda', 'renan');

//así va a recibir solo un parametro, que es un array
function ejemploArrParam(nombres: string[]) {
    nombres.forEach(nombre => {
        console.log(nombre)
    });
}

const lista2 = ['marina', 'amanda', 'renan']
ejemploArrParam(lista2);
//así no funcionaria
//ejemploArrParam('marina', 'amanda', 'renan')




type Empleado = {
    nombre: string,
    apellidos: string,
    edad: number
}

let empleadoMarina: Empleado = {
    nombre: 'Marina',
    apellidos: 'Boni',
    edad: 29
}

//arrow functions
const mostrarEmpleado = (empleado: Empleado) => {
    return `${empleado.nombre} tiene ${empleado.edad} años`
}   

mostrarEmpleado(empleadoMarina);


const pagarSalario = (empleado: Empleado, cobrarSalario: () => string) => {
    if(empleado.edad > 70) {
        return //no hace nada
    } else {
        cobrarSalario() //llama a la callback que recibió de parametro
    }
}

const quieroCobrar = () => 'Yo cobrooooo mi salario';

pagarSalario(empleadoMarina, quieroCobrar);
pagarSalario(empleadoMarina, () => 'quiero cobrar mi sueldo')




// ***** FUNCIONES ASYNC
async function ejemploAsync(): Promise<string> {
    await console.log('tarea a completar antes de seguir')
    //cuando terminar await, sigue las siguientes lineas
    return 'completado'
}

ejemploAsync()
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log('todo ha terminado'))



// ***** FUNCIONES GENERADORAS - GENERATORS (asterisco)

function* ejemploGenerator() {
    //yield
    let index = 0;

    while(index < 5) {
        //emitimos un valor
        yield index++;
    }
}

//guardamos la funcion generadora en una variable

let generadora = ejemploGenerator();

//luego accedemos a los valores emitidos

console.log(generadora.next().value) //0
console.log(generadora.next().value) //1
console.log(generadora.next().value) //2
console.log(generadora.next().value) //3


//worker

function* watcher(valor: number) {
    yield valor; //emitimos el valor inicial
    yield* worker(valor) //llamamos a worker
    yield valor + 4; //emitimos el valor final
}

function* worker(valor: number) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}

let generatorSaga = watcher(0)

console.log(generatorSaga.next().value) //0 (lo ha hecho el watcher)
console.log(generatorSaga.next().value) //1 (worker)
console.log(generatorSaga.next().value) //2 (worker)
console.log(generatorSaga.next().value) //3 (worker)
console.log(generatorSaga.next().value) //4 (watcher)



// *****SOBRECARGA DE FUNCIONES

function mostrarError(error: string | number): void {
    console.log('Ha habido un error:', error)
}





// *****PERSISTENCIA DE DATOS

//1. Local Storage - almacena los datos en el navegador (no se eliminan automaticamente);
//2. Session Storage - los datos se guardan en la sesión del navegador (se eliminan cuando se termina la sesión del navegador);
//3. Cookies - tienen fecha de caducidad y tienen un ambito de URL;

// Local Storage y Session Storage

function guardarLS(): void {
    localStorage.setItem('nombre', 'Marina'); //clave, valor
}

function leerLS(): void {
    let blabla = localStorage.getItem('nombre'); //clave
}


//Cookies con npm cookies-utils 

//import { setCookie, deleteCookie } from 'cookies-utils';

const cookieOptions = {
    name: "user", // string,
    value: "Marina", // string,
    maxAge: 10 * 60, // optional number (value in seconds),
    path: "/", // optional string,
};

//setCookie(cookieOptions);

//deleteCookie('user')





// ***** GESTIÓN DE LOS EVENTOS

class Temporizador {

    public terminar?: () => void;

    public empezar(): void {

        setTimeout(() => {

            if(!this.terminar) return //comprobamos que la función terminar existe (ya que es opcional) //if return
            this.terminar //else ejecuta terminar

        }, 10000)

    }
}

const miTemporizador: Temporizador = new Temporizador();

// definir la funcion del callback a ejecutar cuando termine el tiempo
miTemporizador.terminar = () => {
    console.log('Evento terminado')
}

// lanzamos el temporizador
miTemporizador.empezar(); //iniciará el timeout




// ***** EXTENDER DE EVENT TARGET

class Temporizador2 extends Temporizador {

}