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


