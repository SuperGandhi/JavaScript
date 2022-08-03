// Methods of string text (part 2)

let input = "GEMINIS";
let db = "geminis";

/**
 * Basicamente usamos estos métodos para comparar o
 * para convertir una cadena a minúsculas o mayúsculas
 * toLowerCase--> toUpperCase
 */

console.log(input.toLowerCase());
console.log(input.toLowerCase() === db.toLowerCase());

/**
 * Formas de concatenar dos cadenas de caracteres
 */

let oneString = "Hi I'm the firt string";
let twoString = "Hi I'm the second string";

console.log(oneString.concat(" ", twoString));
console.log(oneString + " " + twoString);
console.log(`${oneString} ${twoString}`);

// Delete spaces the start and final

let threeString = "Hi I'm the third string"
console.log(oneString.length);

/**
 * trim --> elimina los espacios al principio y final
 * trimStart --> elimina los espacios al principio
 * trimEnd --> elimina los espacios del final
 */

console.log(threeString.trim().length);
console.log(threeString.trimStart().length);
console.log(threeString.trimEnd().length);
