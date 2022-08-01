
const obj = {
    id: 4,
    name: 'Julian',
    lastName: 'Casablancas',
    isDeveloper: false,
    booksFavorites: ['The method', 'The code of the manifestation'],
    "4-juegos": [1,2,3,4]
}

// acceder a los obj
console.log(obj.id);
console.log(obj["4-juegos"]);

const prop = "isDeveloper"
console.log(obj[prop]);

const obj2 = obj;
console.log(obj2);

console.log(obj.name);


/**
 * Ordenar listas de objetos 
 * en función de una propiedad
 */

const listMovies = [
    {title: "Ciudad M", year: 2000},
    {title: "En busca de la felicidad", year: 1997},
    {title: "Bluevelvet", year: 1932},
    {title: "Butterfly effect", year:2004},
    {title: "TED", year:2012}
]

console.log(listMovies);

/**
 * Para ordenarlas usamos el método sort
 * Muta el valor del array original
 */

listMovies.sort((a, b) => a.year - b.year)
console.log(listMovies);


