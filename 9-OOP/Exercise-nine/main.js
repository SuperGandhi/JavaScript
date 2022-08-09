class Student{

    constructor(name,signatures){
        this.name = name;
        this.signatures = signatures;
    }

    getData(){
        console.log(`Hi my name is ${this.name} and I have the next signatures ${this.signatures} `);
    }
}

const newStudent = new Student("Patrick", 23, "JS")
console.log(newStudent);
newStudent.getData()