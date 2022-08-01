// resource : https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

const date = new Date();
console.log(date);

// Atenttion - The months initialize in 0(0-Noviembre, 11 - Diciembre)
const dateTwo = new Date(2022,10,20,1,23,52,193);
console.log(dateTwo);

const date3 = new Date(-100000000000000);
console.log(date3);

const date4 = new Date("October 13, 1979 12:15:15")
console.log(date4);

// Comparar fechas
console.log(date.getTime() == dateTwo.getTime());

/**
 * Obtener día, mes y año de una fecha
 * dia --> getDate
 * mes --> getMonth
 * año --> getFullYear
 * Mostrar fecha en un string --> toLocaleDateString
 */

console.log(dateTwo.getDate());
console.log(dateTwo.getMonth() + 1);
console.log(dateTwo.getFullYear());
console.log(dateTwo.toLocaleDateString());
