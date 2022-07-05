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

//                  item        index       array
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
    // console.log('Este es el array sobre el cual ejecuto el método',this);

    // map genera un nuevo array y lo retorna

    const arrayNovo = [];

    // de donde sale la info que llenará arrayNovo? de profesores
    // y como lo referenciamos a profesores? Rta con this. 
    //(desde profesores.myMap();)

    // recorre el array con for
    for(let i = 0; i < this.length; i++) {
        // console.log(this);

        // profesores usa el método myMap y es llamada la api que se 
        // construye aqui; recibe el array de profesores como argumento
        // de la funcion y hacemos referencia a profesores con la palabra this
        // y por ultimo hago una copia de profesores con push (pasando el callback)
        // por cada item.
        const retornoDelCallback = this[i];
        arrayNovo.push(retornoDelCallback);
        // console.log(this[i]);   
    }

    return arrayNovo;

    
}

const nuevoArrayConMetodoNuevoAPI = profesores.myMap();
// const nuevoArrayConMetodoNuevoAPI = profesores.map;

const arrayNumeros = [1,2,3,4];
const nuevoArrayConMetodoNuevoAPI2=arrayNumeros.myMap();

console.log('el array devuelto es: ',nuevoArrayConMetodoNuevoAPI);


// clase 14 break del video 


// profesores.map(elemento => {
//     return(`<h1>Personal:</h1>
//     <p>Estos son nuestros profesionales:</p>
//     <ul>
//         <li>${elemento.nombre}</li>
//         <li>${elemento.profesion}</li>
//     </ul>

//     `)})


// console.log(profesores)

//////////////////////////////////////////////
// funcionan el map como el prototipo

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

const nombres = profesores.map(function(x) {
    return x;
 });
console.log("funcion map");
console.log(nombres);


// crear el prototipo

Array.prototype.myMap = function() {
    const nuevoArreglo = [];
    for(let i = 0; i < this.length; i++) {
        nuevoArreglo.push(this[i]);
    }
       
    // callback.forEach(element => {
    //     nuevoArreglo.push(element);
    // });
    return nuevoArreglo;
}



const nombresMyMap = profesores.myMap();
console.log("funcion myMap");
console.log(nombresMyMap);
////////////////////////////////////////////

//////////////////////////////////////////
///////MAP


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
const cadena = profesores;

// NO FUNCIONA LLAMANDO DIRECTAMENTE A LA FUNCION, FALTA EL PROTOTIPO... 
// const devolucionMostrarArray = mostrarArray(cadena,0,profesores);
// console.log(devolucionMostrarArray);

// this hace referencia a al array que se le pasa  llamado en 1


//  2. leo mapeado y por cada iteracíon en push voy a 3
Array.prototype.mapeado = function(mostrarArray) {  //mostrarArray se define en function
    const arrayNovo=[];
    for(let i = 0; i < this.length; i++) {
        
        //                   itemDelArray  index  array
        arrayNovo.push(mostrarArray(this[i], i, this));
        // seria igual a: const devuelveArray = mostrarArray; 
        //                arrayNovo.push(devuelveArray);

    }
    return arrayNovo;
    // this es el array
    // i es la posicion
    // this[i] es el ojeto especifico donde buscar la informacion
}


// 3. devuelvo el objeto iterado
//                  itemDelArray  index    array
function mostrarArray(profesor, posicion, Profesores) {
    const nuevoObjeto = {
        string: `Hola soy ${profesor.profesion}`,
        posicion: posicion,
        perteneceA: profesores,
    };
    return nuevoObjeto;
    // return 'hola';
}

// 1. llamo a la api agregada mapeado
const profesoresMapeados = profesores.mapeado(mostrarArray);
console.log(profesoresMapeados);



// uso mapeado con otra cosa

const numeros=[1,2,3,4,5];

/* 
Paso la funcion:
function (numero) {
    return `Soy el número ${numero}.`
}
mapeado en realidad es un bucle que encierra a la funcion anterior
*/
const numMapeados = numeros.mapeado(numero => `Soy el número ${numero}.`);

console.log(numMapeados);

////////////
/////FILTER
//////////////////////////////////////////
////////////Filter


const profesores = [
    {nombre:'Patricia Fosco',
    edad: 35,
    profesion:'Profesora',},

    {nombre:'Melina Zanni',
    edad: 38,
    profesion:'Profesora',},
    
    {nombre:'Federico Coria',
    edad: 34,
    profesion:'Preceptor',},
    
    {nombre:'Cintia',
    edad: 25,
    profesion:'Coordinadora',}
]

//                            item         entero
// function funcionMenorTreinta(profesor) {
    // if (profesor.edad < 30) {return true;} // los que son true se muestran
// }

// const profesoresMenoresTreinta = profesores.filter(funcionMenorTreinta);
// console.log(profesoresMenoresTreinta);

//                            item      String
// function funcionProfesion(profesor) {
//     if (profesor.profesion == 'Profesora') {return true;} // los que son true se muestran
// }

// const profesorasDelInstituto = profesores.filter(funcionProfesion);
// console.log(profesorasDelInstituto);

//                            item      parte de un String

// function funcionsProfesion(profesor) {
    // if (profesor.nombre.includes('Coria')) {return true;} // los que son true se muestran
    // return profesor.nombre.includes('Coria'); // esta implicito el if y el return true
// }

// const profesorDelInstituto = profesores.filter(funcionsProfesion);
// console.log(profesorDelInstituto);

const profesores = [
    {nombre:'Patricia Fosco',
    edad: 35,
    profesion:'Profesora',},

    {nombre:'Melina Zanni',
    edad: 38,
    profesion:'Profesora',},
    
    {nombre:'Federico Coria',
    edad: 34,
    profesion:'Preceptor',},
    
    {nombre:'Cintia',
    edad: 25,
    profesion:'Coordinadora',}
]

Array.prototype.filtrar= function(condicion) {
    const nuevoArray = [];
    for(let i=0; i < this.length; i++){
        if(condicion(this[i], i, this) === true){
            nuevoArray.push(this[i]);
        }
    }
    // console.log(nuevoArray);
    return nuevoArray;
    
}

const menoresDeTreintaCinco=profesores.filtrar(profesores => profesores.edad < 35);
console.log(menoresDeTreintaCinco);

//////////////
// Reduce 2.0

const numeros = [1,2,3,4,5,6,7,8,9];

function callback(acumulador, numero) {
    return acumulador + numero;
}

console.log(numeros.reduce(callback,'0'));

///////////////reductor
const numeritos = [1,2,3,4,5,6,7,8,9];


Array.prototype.reductor=function(callback, inicio) {
    let acumularrayAlPrincipio=[];
    let elementoActualOrigen;
    for(let i=0; i<this.length; i++) {
        if(i == 0){
            acumularrayAlPrincipio.push(inicio);
        }  
        elementoActualOrigen=this[i];
        callback(inicio, elementoActualOrigen);
        acumularrayAlPrincipio.push(callback(inicio, elementoActualOrigen));        
    }
    let aDevolver;
    for(let i=0; i<acumularrayAlPrincipio.length; i++) {
        if (i==0) { aDevolver =`${acumularrayAlPrincipio[i]} `;}
        aDevolver =aDevolver + `${acumularrayAlPrincipio[i]} `;

    }
    return aDevolver;
}

function callback(acumulador, numero) {
    return acumulador + numero;
}


console.log(numeritos.reductor(callback,25));

//////////
