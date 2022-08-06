const logger = require('./logger');

// console.log("Hi showing to the screen");
// console.info("Hi I'm informative message");
// console.warn("Hi is an warning");
// console.debug("Hi I'm debug");
// console.error("Hi I'm ERROR")


// logger.log("Hi showing to the screen");
logger.info("Hi I'm informative message");
logger.warn("Hi is an warning");
logger.debug("Hi I'm debug");
logger.error("Hi I'm ERROR")

const greeting = "Hello"

try{
    console.log("Success");
    const greetingTwo = miFunc("Hellow")
    console.log(greetingTwo);
}catch(e){
    console.log(`El valor de e es: ${e}`);
    console.log(e);
}finally{
    console.log("Se ejecuta si hay o no error");
}