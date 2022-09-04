'use strict';

/**
 * Checking typical errors in Javascript
 */

// Example 1

const oops = function () {
    let haha = 2; // the variable was not declared

    console.log(haha);
};

oops();
// console.log(haha);

// Example 2
const outer = function () {
    for (let i = 1; i <= 3; i++) { // the variable was not declared
        inner();
    }
    // 1,2,3
};
const inner = function () {
    for (let i = 1; i <= 5; i++) { // the variable was not declared


        console.log(i);
        // 1,2,3,4,5
    }
};

outer() // 1,2,3


// Example 3
function canVote(age) {
    if (age === 12 && age === '12') return "no, can't vote"
    else if (age === 17 && age === '@18') return "no, can't vote"
    else return "yay, start voting"
}


// Example 4 

//What is the output of the following code?
const isPrime = function (n) { // use var --> goblal conflict
    for (let i = 2; i <= Math.sqrt(n); i++) { // the variable was not declared
        if (n % i == 0) return false;
    }
    return n > 1;
}
const sumOfPrimes = function (n) { // use var --> global conflict
    let sum = 0;
    for (let i = 1; i <= n; i++) { // the variable was not declared
        if (isPrime(i)) sum += i;
    }
    return sum;
}
console.log(sumOfPrimes(10));

// Example 5

const isPerfect = function (number) { // user var --> global conflict
    let sumOfFactors = 0; // user var --> global conflict
    for (let index = 1; index <= number; index++) { // the variable was not declared
        if (number % index === 0) { // use == to compare
            sumOfFactors += index;
        }
    }
    return sumOfFactors === number * 2; // use == to compare
};
for (let i = 1; i <= 10; i++) { // the variable was not declared
    console.log('is ' + i + ' perfect?: ' + isPerfect(i));
}

var max = 100;
console.log(max);

var max = 200;
console.log(max);


console.log(message);
console.log('Entering loop');
for (var i = 0; i < 3; i++) {
    console.log(message); //visible here, but undefined
    var message = 'spill ' + i;
}
console.log('Exiting loop');
console.log(message);


let factor = 2;
let product = function (number) {
    return number * factor;
};
factor = 0;
console.log(product(4));



// USE TO CONST, LET AND VAR

const sam = Object.freeze({
    first: 'Sam',
    age: 2
}); // with freeze method the properties of this object will be inmutable
//sam = {}; //ERROR, the reference sam is immutable
// sam.age = 3;
console.log(sam.age);


// Exercise 1
// What’s the output of this code? , before modify the code to produce a reasonably desired result
function first() {
    for (let i = 0; i < 5; i++) {
        second();
    }
}

function second() {
    for (let i = 0; i < 3; i++) {
        console.log(i);
    }
}
first();

// Exercise 2
// What are the benefits of using 'use strict';

/**
 * It’s easier to write "secure" JavaScript codes. 
 * It changes previously accepted "bad syntax" into real errors.
 */

// Exercise 3

// Will this code result in an error?

const fourth = '4th'; // type error as fourth is declared as a const
fourth = fourth;
console.log(fourth);


// Exercise 5
// Will this code result in an error?

const person = Object.freeze({ // the method freeze can only access firts level properties
    name: 'John Doe', 
    address: {
        street: '101 Main St.',
        City: 'New York'
    }
});
person.address.street = '102 Main St.'; // type error 
console.log(person);
// respueta valida 