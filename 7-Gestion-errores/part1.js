const deepFunction = val => {
    if(typeof val === "number"){
        return 2 * val
    }
    // return false;
    // throw new Error("Value should be type Number");
};

console.log(deepFunction("121"));


const numero = "10"

try{
    // código que puede fallar
    console.log("Ejecución correcta");
    const doble = miFunc(numera);
    console.log(doble);
}catch(e){
    // en caso de fallo, ejecuta esto
    console.log(`El valor de e es: ${e}`);
    console.log(e);
} finally{
    console.log("Se ejecuta si hay o no error");
}


/**
 * Errores comunes:
 * InternalError
 * SintaxError
 * TypeError
 * RangeError
 * ReferenceError
 * 
 * Resource: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error
 */