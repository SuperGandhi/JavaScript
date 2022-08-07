/**
 *  Formas de importar/ exportar módulos 
 *  1- CommonJS - require
 *  2- Import ES6 - import
 */

// const moduleMaths = require("./modules/maths.js")
// console.log(moduleMaths.sum);

// const {factorial,sum} = moduleMaths;

const {factorial, sum} = require("../modules/maths.js")
// const fact = factorial(5)
// console.log(fact);

// const sum = moduleMaths(10,4)
// console.log(sum);
