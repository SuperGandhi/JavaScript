/**
 * Una variable que contenga la lista de la compra (mínimo 5 elementos)
 * Modifica la lista de la compra y añádele "Aceite de Girasol"
 */

const listBuy = ['milk' , 'oil', 'avocado', 'meat', 'eggs' ]
listBuy.push('Aceite de Girasol')
console.log(listBuy);

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listBuy.pop()
console.log(listBuy);

/**
 * 
 * Una lista de tus 3 películas favoritas 
 * (objetos con propiedades: titulo, director, fecha)
 * 
 * 
 * 
 * 
 * 
 */

const objMovies = [
    {title: "Resplandor", director: "Stanley Kubrick", 
    date: 1980},
    {title: "A clockwork orange", director: "Stanley Kubrick", 
    date: 1971},
    {title: "Ciudad de M", director: "Felipe Degregori", 
    date: 2000}
]

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const listFilter = objMovies.filter(value => value.date > 2010)
console.log(listFilter);

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const listMap = objMovies.map(value => {return value.director })
console.log(listMap);

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const newListMap = objMovies.map(value => {return value.title})
console.log(newListMap);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const director = [ 'Stanley Kubrick', 'Stanley Kubrick', 'Felipe Degregori' ]
const title = [ 'Resplandor', 'A clockwork orange', 'Ciudad de M' ]

newArray = title.concat(director);
console.log(newArray);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

newList = [...director, ...title]
console.log(newList);
