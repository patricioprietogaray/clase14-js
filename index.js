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

const numeros=[1,2,3,4,5];

function callback(acumulador, numero) {
    return acumulador + numero;
}

const suma = numeros.reduce(callback, 0);

console.log(suma);




