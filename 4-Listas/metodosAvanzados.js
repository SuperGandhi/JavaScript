/**
 * Métodos avanzados
 * map --> filter --> reduce
 */

// const array = ["Piura", "Lambayeche", "Chiclayo", "Junin", "Tumbes"];

// const val = array.forEach( i =>{
//     console.log(i);
//     return 
// })
// console.log(val);


/**
 * map -> crea un nuevo array con 
 * los resultados de la llamada a la función 
 * indicada aplicados a cada uno de sus elementos.
 */

// const newArray = array.map((value,indice) => {`${indice + 1} - ${value}`})
// console.log(newArray)

/** 
 * filter -> crea un nuevo array con todos 
 * los elementos que cumplan la condición 
 * implementada por la función dada.
 * 
 * */ 

 const listObjects = [
    {name : "Lore", age:23},
    {name : "Mari", age:43},
    {name : "Rimdbaud", age:73},
    {name : "Debussy", age:53},
    {name : "Clark", age:43}
]

// const personasMayores = listObjects.filter(obj => {
//     if (obj.age > 30) return true
//     else return false
// })


const personasMayores = listObjects.filter(obj => obj.age > 30)
console.log(personasMayores);

const newList = listObjects.filter(obj => obj.name != "Miguel")
console.log(newList);

/**
 * reduce -> ejecuta una función reductora sobre cada elemento de un array, 
 * devolviendo como resultado un único valor.
 * 
 */

const numbers = [1,2,3,4,5,6]

const suma = numbers.reduce((acumulado,cur,currI, arrayOriginal)=>{
    console.log(acumulado);
    console.log(cur);
    console.log(currI);
    console.log(arrayOriginal);
    return acumulado + cur;
})
console.log(suma);
