// Como obterner una lista a  partir de otra -->slice
const array = ['goodbye', 1,2,3,true,false,null, 'oi']

// no modifica el valor original del array
console.log(array.slice(1,4));
const array2 = array.slice(2,5)
console.log(array2);

const array3 = array.slice(2,-2)
console.log(array3);