// Exercise One

// var asperson = "#";

for(let i=0 ; i < 8 ; i++){  
    console.log(asperson)
    asperson = asperson + "#";
}

// Exercise two Fizz-Buzz

// var divisibleTres = "Fizz"
// var divisibleCinco = "Buzz"

// for (let i = 0; i < 101 ; i++) {
//     if (i % 3 == 0) console.log(divisibleTres);
//     else if (i % 5 == 0) console.log(divisibleCinco);
//     else if (i % 3 == 0 && i % 5 === 0) console.log("FizzBuzz");
//     else console.log(i);
// }

for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}