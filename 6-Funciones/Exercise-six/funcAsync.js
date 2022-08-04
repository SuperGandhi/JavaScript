const promise = (greeting) => {
    console.log(`${greeting} que demorará cinco segundos`);
};

setTimeout(promise,5000, "Hola soy una promesa");