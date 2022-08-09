const person = {
    name: "Patrick",
    age: 24,
    isDeveloper: true,
    greeting: function (){
        console.log("HI");
    }
}

person.greeting()

// FUNC FACTORY
const createPerson = (name, age, isDeveloper) => {
    return{
        name,
        age,
        isDeveloper,
        greeting: function (){
            console.log("Hi");
        }
    }
}

const newPerson = createPerson("Julio", 23, true)
console.log(newPerson);


const newPersonTwo = createPerson("Julia", 43,false)