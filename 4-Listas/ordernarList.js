/**
 * Método --> sort
 * Modifica el array
 */

const array = [5,6,7,9,10,11,12]
console.log(array);

// callback
array.sort((a, b) =>{
    if (a < b) return +1
    else if (a < b) return -1
    else return 0
})

console.log(array);

// Ordenar arrays numéricos

const arrayNumerico = [7,8,9,10,11,12,13]
array.sort((a,b) => a - b)
console.log(arrayNumerico);

// Uso habitual en array de objetos

const listObjects = [
    {name : "Lore", age:23},
    {name : "Mari", age:43},
    {name : "Rimdbaud", age:73},
    {name : "Debussy", age:53},
    {name : "Clark", age:43}
]

// listObjects.sort((a,b) => {
//     if (a.age < b.age) return -1
//     else if (a.age > b.age) return +1
//     else return 0
// })

listObjects.sort((a,b) => a.age - b.age)

console.log(listObjects);