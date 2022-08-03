const name = "Patrick";
const lastName = "Borja";
const age = 20;

greeting(name, lastName, age)
function greeting(name, lastname, age){
    console.log(`Hi ${name} ${lastname} you have ${age}`);
}

const nameTwo = "Julian";
chao(nameTwo)

function chao(name){
    name = "Julio"
    console.log(`Bye ${name}`);
}

let person = {name:"Julia", lastName: "Gonzales"};

greetingPerson(person)

function greetingPerson(obj){
    // cambia el obj original 
    obj.lasName = "Villar";
    console.log(`Hi ${obj.name} ${obj.lastName}`);
}

// greetingPerson()


function printNumber(n=7){ // Parámetros por defecto
    console.log(n);
}

printNumber(10)

function otherNumber(...props){
    console.log(props);
}
otherNumber(1,2,3,4,5,6,7,8)


function sum(...nums){
    // el return se usa para que la función nos devuelva un resultado
   return nums.reduce((a,b) => a + b);
}

const s = sum(1,23,3,4,56,6,2)
console.log(s);

let vari = "hi";

function multiplicar(a=0, b = 0){
    console.log(vari);
    // let varInter = "Bye"
    return a * b
}

console.log(varInter);
console.log(multiplicar(2,10));