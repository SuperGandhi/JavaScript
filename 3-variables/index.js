

// var variable;
// let variable;
// const variableConst = 1;


// // may vary
// var a = 1;
// console.log(a);

// a = 5
// console.log(a);

// // can't vary
// const b = 2;
// // b= 10
// console.log(b);

// let c = 32;

// c= 43
// console.log(c);

/**
 * Difference between var and let
 * 
 * Var have scope global
 * Let have scope only in the block code where
 * is assigned
 */


var variable = "Hi"

for(let i = 0; i < 3; i++){
    var variable = "I'm the second"
}

console.log(typeof variable);

