class Person{
    _name
    _age
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`Hi my name is ${this.name} and I have ${this.age} years old`);
    }
}

class Developer extends Person{
    constructor(name,age, language){
        super(name,age)
        this.language = language;
    }

    greeting(){
        super.greeting()
        console.log(`And I'm developer in ${this.language}`);
    }
}

const newDeveloper = new Developer("Patrick", 23, "Python")
console.log(newDeveloper);
newDeveloper.greeting()

// Polimorfismo -> las clases pueden tomar diferentes formas