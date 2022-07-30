/**
 * Comparar listas
 *  --> every
 */

const array = [43,565,787,-13,12,-4,456,878]

// const result = array.every(value =>{
//     if( typeof value > 0) return true
//     else return false
// })

const result = array.every(val => val > 0)
console.log(result);

// Compare list
const ar1 = [1,2,3,4]
const ar2 = [1,2,3,4]
// console.log(ar1 == ar2);

const compareArrays = (arrayOne, arrayTwo)=>{
    if (arrayOne.length !== arrayTwo.length) return false
    const res = arrayOne.every((value, i) => value === arrayTwo[i])
    return res
}

console.log('====================================');
console.log(compareArrays(ar1, ar2));
console.log('====================================');
const ar3 = [1,2,3,6]
console.log(compareArrays(ar1, ar3));