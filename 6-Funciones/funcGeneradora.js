function* generateId(){
    let id = 0;
    while(true){
        id++
        if(id === 10){
            return id;
        }
        // espera hasta que se vuelva a llamar
        yield id;
    }
}

const gen = generateId();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);