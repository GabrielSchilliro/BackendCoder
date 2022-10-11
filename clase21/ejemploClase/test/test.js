import Texto from '../src/Texto.js';

/* 
* Si no recibe nada no tiene nada para formatear
*/
function test1() {
    const texto = new Texto('');

    const result = texto.obtenerFormateado();

    if (result !== '') throw new Error('string vacio deberia devolver un string vacio');
}

/* 
* Si recibe numeros los deja iguales
*/
function test2() {
    const texto = new Texto('123');

    const result = texto.obtenerFormateado();

    if (result !== '123') throw new Error('Los numeros deberian quedar iguales');
}

/* 
* si recibe texto todo en minusculas devuelve la primera en mayuscula
 */
function test3() {
    const texto = new Texto('abc');

    const result = texto.obtenerFormateado();

    if (result !== 'Abc') throw new Error('La primera deberia ser mayúscula');
}
/* 
* si recibe texto todo en mayusculas devuelve la primera en mayuscula
 */
function test4() {
    const texto = new Texto('ABC');

    const result = texto.obtenerFormateado();

    if (result !== 'Abc') throw new Error('Sola la primera deberia ser mayúscula');
}

const tests = [
    test1,
    test2,
    test3,
    test4
];

for (const test of tests) {
    test();
}