
let ten = Promise.resolve(10);
ten.then((value) => console.log(`Get ${value}`));


// function almacenamiento(nido, nombre){
//     return new Promise (resolve =>{
//         nido.leerAlmacenamiento(nombre, resultado => resolve (resultado));
//     });
// }

// almacenamiento(granRoble, "enemigos")
// .then(valor => console.log("Obtuve", valor));

function asyncOne(){
    // Call a database extern
    // Can be to give an ERROR
}

// Funciones que pueden o no ejecutarse de forma exitosa                     
const myPromise = new Promise((resolve, reject) =>{
    const i = Math.floor(Math.random() * 2)
    // if all correct
    if(i !== 0) resolve();
    else reject();
})

myPromise
    .then(() => console.log("Success"));
    // .catch(() => console.log("Error"));
    // .finally(() => console.log("Always"))
