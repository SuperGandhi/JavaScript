/**
 * Modulo es una parte de código que se puede 
 * reutilizar en nuestro programa
 */

export function sum(a,b){
    return a + b
}


export function multi(a,b){
    return a * b
}


export function poten(a,b){
    return a ** b
}


export function factorial(a){
    let factorial = 1;
    for (let i = 2; i <= a; i++) {
        factorial *= i;
    }
    return factorial;
}
