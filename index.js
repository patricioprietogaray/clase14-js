const profesores = [
    {nombre:'Patricia Fosco',
    edad:'35',
    profesion:'Profesora',},

    {nombre:'Melina Zanni',
    edad:'38',
    profesion:'Profesora',},
    
    {nombre:'Federico Coria',
    edad:'34',
    profesion:'Preceptor',},
    
    {nombre:'Cintia',
    edad:'35',
    profesion:'Coordinadora',}
]

// console.log(profesores);
// apartir de este array con objetos (profesores)
// quiero formar otros objetos con un texto distinto
// utilizando un callback
// primero se crea la funcion, luego se llama

// function callback(elemento) {
//     return `Hola, soy ${elemento.profesion}, mi nombre es ${elemento.nombre} y tengo ${elemento.edad} años`;
// }
// con la propiedad map el callback puede retornar ademas del elemento, 
// el index y un array de la siguiente manera:


// function callback()

// se puede poner el nombre que quieras pero se debe respetar el orden
// 1. array de origen
// 2. posicion
// 3. array de origen en formato original

// con map se puede retornar en un nuevo array, con forEach no.

function callback(profesores, posicion, profesoresArray) {
    const nuevoObjeto = {
        cadena: `Hola, soy ${profesores.profesion}, mi nombre es ${profesores.nombre} y tengo ${profesores.edad} años.`, 
        posicion: posicion,
        perteneceA: profesoresArray,
    }
    return nuevoObjeto;
}



// el callback tiene retorno
const nuevoArray = profesores.map(callback);
// console.log(nuevoArray);

// crear una version propia de map:
// en tiempo de ejecución para dar acceso a los metodos
// map, filter, reduce y forEach. JS envuelve el array en un objeto
// se llama OBJETOARRAY, se puede escribir sobre la api de JS para 
// añadir metodos y propiedades a estos objetos (array) para que 
// en tiempo de ejecución tengan acceso

// Array.prototype.miMetodo
// a este metodo le asigno una funcion
// que termino agregando un metodo a la api de js (Array)
// NO SE ESTA CREANDO UNA API NUEVA
// this estará apuntando al array que invocanco el metodo: profesores
// this es una palabra que referencia (en este ejemplo), nos dá acceso al
// array sobre el que ejecuto el método, en este ejemplo this reemplaza a profesores
// o reemplaza a arrayNumeros, segun el caso.


Array.prototype.myMap = function() {
    console.log('Este es el array sobre el cual ejecuto el método',this);
    
}

const nuevoArrayConMetodoNuevoAPI = profesores.myMap();

const arrayNumeros = [1,2,3,4];
const nuevoArrayConMetodoNuevoAPI2=arrayNumeros.myMap();






// profesores.map(elemento => {
//     return(`<h1>Personal:</h1>
//     <p>Estos son nuestros profesionales:</p>
//     <ul>
//         <li>${elemento.nombre}</li>
//         <li>${elemento.profesion}</li>
//     </ul>

//     `)})


// console.log(profesores)


