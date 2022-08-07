/**
 * Modulo es una parte de código que se puede 
 * reutilizar en nuestro programa
 */

function sum(a,b){
    return a + b
}


function multi(a,b){
    return a * b
}


function poten(a,b){
    return a ** b
}


function factorial(a){
    let factorial = 1;
    for (let i = 2; i <= a; i++) {
        factorial *= i;
    }
    return factorial;
}

module.exports = {
    sum,
    multi,
    poten,
    factorial
}