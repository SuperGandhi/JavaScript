const array = [45,3214,42,12,34,56,98];

const res = array.some(value => value < -10)
console.log(res);

const exist = array.some(value => value == 45)
console.log(exist);

const listObjects = [
    {name : "Lore", age:23},
    {name : "Mari", age:43},
    {name : "Rimdbaud", age:73},
    {name : "Debussy", age:53},
    {name : "Clark", age:43}
]

const existName = listObjects.some(person => person.name == "Rimdbaud")
console.log(existName);

// Como obtener una lista de un obj iterable

const str = "Hi, I'm Patrick"
console.log(str[6]);

const ar_str = Array.from(str)
console.log(ar_str);

const set = new Set([2,3,'hi', 4])
const ar_set = Array.from(set)
console.log(ar_set);

// Obtener un iterable de los indices

const keys = array.keys()
console.log(keys);

const array_keys = Array.from(keys);
console.log(array_keys);