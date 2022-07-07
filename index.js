// Reduce explicado nuevamente

// El reduce recibe un callback (en ese sentido tiene en comun con el filter y con el map)
// el callback accede al array mediante un bucle ( el reduce itera al callback)
// El reduce como a partir de un input generar otro.
// A partir de un array el acumulador del callback tendra a al acumulador que es el valor
// inicial que viene del segundo parametro de reduce, el acumulador se ira actualizando
// numero, el segundo parametro de la funcion callback tomara los valores del array
// y en este caso la funcion sumará lo acumulado más el valor del item del array.
// ej:    acumulador  +  numero (valor del array)  =  acumulador
//    AC  +  Nro   = ACactualizado
//    0   +   1    =    1
//    1   +   2    =    3
//    3   +   3    =    6
//    6   +   4    =    10
//    10   +  5    =    15

// const numeros=[1,2,3,4,5];

// function callback(acumulador, numero) {
//     return acumulador + numero;
// }

// const suma = numeros.reduce(callback, 0);

// console.log(suma);

/////

const usuarios = [
    //  [0]     [1]    [2]
    ['Agustin', '23', 'Profesor'],
    ['Oriana',  '31', 'Enfermera'],
    ['Martina', '19', 'Mecánica'],
    ['Omar',    '27', 'Soldado'],
]

function callback(acumulador, datoRecibidoUsuario) {
    const nombre = datoRecibidoUsuario[0];
    const edad = datoRecibidoUsuario[1];
    const profesion = datoRecibidoUsuario[2];

    // por cada iteracion mostrara cada array (individual dentro de personas)
    // console.log(nombre, edad, profesion );

    // spread operator ...     usuarios viene del valor que le pasa reduce a callback
    //                          y nombre es el dato recibido del array usuarios segun indice
    return { usuarios: [...acumulador.usuarios, nombre], 
        edades: [...acumulador.edades, edad], 
            profesiones: [...acumulador.profesiones, profesion] } ;
    // la primera iteracion se pasan los datos iniciales
    // de la segunda hasta la ultima se pasan el objeto {}
    // que retorno ? los arrays que voy generando 
    // { usuarios: [], edades: [], profesiones: [] }
}

// el reduce buclea a la funcion callback y como inicio (en vez de cero) crea arrays vacios
// para que sean "llenados" cuando se recorre el array usuarios.
const usuariosReducidos = usuarios.reduce(callback, { usuarios: [], edades: [], profesiones: [] });

console.log(usuariosReducidos);

