/**
 * Los strings son basicamente cadenas
 * de caractéres se pueden usar dobles o simples
 */

let strComillas = "The other day told me literally";
let strComillasOther = 'The other day told me literally "going to garbage"';

// Comillas invertidas (backticks)
// Podemos introducir variables con su uso
// también permite hacer saltos de linea 

let str_backsticks = `Hi this an string with backstikcs`
console.log(str_backsticks);

let name = "Pat";
let greeting = `Hi, ${name} welcome`

console.log(greeting);

let plantila = `
<html>
    <h1>Page web to ${name}</h1>
    <p>${greeting}</p>
</html>
`;

console.log(plantilla);

