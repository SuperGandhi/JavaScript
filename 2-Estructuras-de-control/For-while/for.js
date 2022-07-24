// Bucle for
const array = [2,23,4,56,432,5,21,2,3,4,1,32,3215,5,6]

//  inicialización, condición, actualización(incremental)
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i] / 2);
// }

// for off

// for (const value of array) {
//     console.log(value);
// }

// for each

array.forEach(element => {
    console.log(element);
});

// for in

let hardware = {
    desktop: "Apple",
    model: 2020,
    procesador: "Intel-coreI9"
}
console.log(hardware.desktop);

let prop = "procesador"
console.log(hardware[prop]);


for (const propertie in hardware) {
    console.log(propertie);
    console.log(hardware[prop]);
}