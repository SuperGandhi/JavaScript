class Person{
    // Private -> #
    // Solo se pueden acceder desde dentro de la clase
    #name
    #age

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

    // #getAge(){
    //     return this.#age;
    // }

    getAge(){
        return this.#age
    }

    setAge(newAge){
        this.#age = newAge;
    }
}

const person = new Person("Julian", 23)
// console.log(person);
// console.log(person.name);
console.log(person.getName());
// console.log(person.#getAge());
// console.log(_isDevelopper);


// Getter -> métodos que nos permiten obtener atributos/métodos privados o protegidos
const age = person.getAge();
console.log(age);

// Setter -> métodos que nos permiten cambiar el valor de algunos de los atributos privados o protegidos.
person.setAge(25);
console.log(person.getAge());