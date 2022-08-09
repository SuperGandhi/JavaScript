class Person{
    name;
    age;
    isDeveloper;
    // para instanciar creamos un constructor donde se declaran las variables
    // denominadas atributos dentro de una clase
    constructor(name,age,isDeveloper){
        this.name = name;
        this.age = age;
        this.isDeveloper = isDeveloper;
    
    }
    // las funciones dentro de clases de denominan métodos
    greeting(){
        console.log(`Hi mi name is ${this.name} I have ${this.age} and I'm ${this.isDeveloper}`);
    }
}
// con la palabra reservada new creamos un objeto
const newPerson = new Person("Julio", 34, false)
console.log(newPerson);
newPerson.greeting()


let number = 100; // inicializar
let twoPerson = new Person("Julia", 23, true) //instanciar 
console.log(typeof number);
console.log(twoPerson instanceof Person);
// instanceof --> verifica si la variables instanciada pertenece a la clase en cuestión 