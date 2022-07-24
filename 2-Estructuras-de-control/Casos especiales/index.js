// break - continue
// usarlo para excepcionalidades

let array = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < array.length; i++) {
    // return 
    // let o = 10;
    // const r = 20;
    if(array[i] === 3) continue;
    console.log(array[i]);
    // salto
    if(array[i]> 6) break;
}


// Scope bucle, lo ideal es usar let o const
// var tiene un alcance global, let y const(local)
// console.log(i);
// console.log(o);
// console.log(r);



// labels 
// nos permiten nombrar los bucles for o while

let unidades = 0;
let decenas=0;

bucleDecenas: while (true) {
    bucleUnidades: while (true) {
        console.log(`El numero actul es: ${unidades} ${decenas}`);
        unidades++
        if (unidades === 10) {
            unidades = 0
            break bucleDecenas;
        }
        if (decenas === 2) {
            console.log(`El numero actul es: ${unidades} ${decenas}`);
            break bucleUnidades;
        }
    }
    decenas++
}