// Sets o conjuntos

// Conjunto ordenado de valores y objetos
const array =[1,2,3,4,5]

// Conjunto no ordenado de valores únicos
const miSet = new Set(array)

console.log(array);
console.log(miSet);

// .add
miSet.add(4)

// .delete
miSet.delete('hi')
console.log(miSet);

// .clear
// miSet.clear()
// console.log(miSet);

// .has --> prop
console.log(miSet.has(4));

// .size --> prop --> valores únicos
console.log(miSet.size);

miSet.forEach(value =>{
    console.log(value)
})

const it_miSet =  miSet.values()
console.log(it_miSet);

// valores únicos con acceso a los índices
const ar_miSet = [...miSet]
console.log(ar_miSet);