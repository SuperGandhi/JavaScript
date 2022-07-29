/**
 * Unir dos listas .concat(lista2)
 */

const list1 = ["hi", 2, false, null];
const list2 = ["bye", 8, true, undefined];

console.log(list1.concat(list2));
// no cambia los valores de la lista 1
console.log(list1);

const list3 = list1.concat(list2)
console.log(list3);

// unir dos listas con el factor de propagación
console.log(...list3);

const list4 = [...list1,...list2];
console.log(list4);

// ERROR 
//[[lista1], [lista2]]
const list5 = [list1, list2]
console.log(list5)