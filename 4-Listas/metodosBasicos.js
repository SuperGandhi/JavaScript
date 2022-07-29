/**
 * Como trabajas con listas , vectores o arrays
 * Pueden contener cualquier tipo de dato
 */

let var1 = 45;
let array = [1,'hi',true,{id: 5},null,undefined];

console.log('====================================');
console.log(array);
console.log('====================================');

// Acceder a los valores del array a través de su posición
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])

// Métodos para introducir nuevos valores

// --> push , unshift --> Mutan el valor de nuestro array
// Valores al final --> push --> no es conveniente mutar los valores de los array
// cuando se trabaja con el estado en React

array.push("final", 45 , 100 , false)
console.log(array);

//Valores al principio
array.unshift("inicio")
console.log(array);

// Métodos para eliminar valores en nuestro arrays
// pop --> shift --> Mutan el valor del array

// Valores al final --> pop --> elimina el último elemento

array.pop()
console.log(array);

// Valores al principio --> shift --> eliminar el primer elemento

array.shift()
console.log(array);

// Método para eliminar, modificar o añadir valores
// splice

const arrayNumbers = [1,2,3,4,5,6,7,8,9,10]
// new array       =   [ 1,2,8,9,10 ]     

// Eliminar 5 valores a partir del indice 2
arrayNumbers.splice(2, 5)
console.log(arrayNumbers);

// Añadir valores splice(indice,0,valores)
arrayNumbers.splice(2,0,"hi",3,4,5)
console.log(arrayNumbers);

// Modifica valores splice(indice,1,valores)
arrayNumbers.splice(2,1,3)
console.log(arrayNumbers);