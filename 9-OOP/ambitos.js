class Person{
    // Private -> #
    // Solo se pueden acceder desde dentro de la clase
    #name
    #age
    #getAge

    // Protected -> _
    // Solo se puede acceder desde dentro de la clase y clases descendientes
    _isDeveloper = true;
    constructor(name,age){
        this.#name = name;
        this.#age = age;    
    }

    greeting(){
        console.log(`Hi mi name is ${this.name} I have ${this.age}`);
    }

    getName(){
        return this.#name;
    }

    #getAge(){
        return this.#age;
    }
}

const person = new Person("Julian", 23)
// console.log(person);
// console.log(person.name);
console.log(person.getName());
// console.log(person.#getAge());
// console.log(_isDevelopper);
