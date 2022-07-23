// Comparaciones

// Igualdad 
// == igualdad debil(valor), === igualdad fuerte(valor y tipo de dato)

if(10 == 10){
    console.log("igualdad debil");
}


if(10 === 10){
    console.log("igualdad fuerte");
}

let a = 5, b=5

if(a == b){
    console.log("a es igual a b débil");
}

if(a === b){
    console.log("a es igual a b fuerte");
}

let c = 5;
let d = 20;
if(c != d){
    console.log("diferentes en valor");
}

if(c !== d){
    console.log("diferentes en valor y tipo");
}

let max = 10 ;
let min = 5;

if(max > min){
    console.log(true);
}else if(max === min){
    console.log("son iguales");
}else{
    console.log(false);
}

let infinity = Infinity;

if(infinity != 0) console.log(infinity)