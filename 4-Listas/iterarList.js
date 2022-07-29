// Iterar los valores de una lista
const array = [1,2,3,4,5,'hi', undefined];

// Previous --> --eficiencia
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// ES6 --> ++eficiencia
let sum = 0;
const arrayNums = [4,5,6,7,8,9,10,11,12,13]
arrayNums.forEach(value =>{
    sum += value
    console.log(value);
})
console.log('====================================');
console.log(sum);
console.log('====================================');

// Búsqueda de un valor dentro de una lista con el método --> find
// quiero encontrar el elemento 90
const vari = array.find(value =>{
    if(value === 90) return true
})

console.log(vari);

const listObjects = [
    {name : "Lore", age:23},
    {name : "Mari", age:43},
    {name : "Rimdbaud", age:73},
    {name : "Debussy", age:53},
    {name : "Clark", age:43}
]

// const object = listObjects.find(i=>{
//     if (i.name == "Mari") return true
// })


const object = listObjects.find(i=>{return i.name === "Mari"})
console.log(object.name);

// destructuring
const {age} = listObjects.find(i => i.name === "Clark")
console.log(age);