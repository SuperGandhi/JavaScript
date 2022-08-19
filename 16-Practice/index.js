'use strict';

/**
 * Checking typical errors in Javascript
 */

// Example 1

const oops = function () {
    haha = 2; // the variable was not declared

    console.log(haha);
};

oops();
console.log(haha);

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
        if (number % index === 0) { // use == 
            sumOfFactors += index;
        }
    }
    return sumOfFactors === number * 2;  // use == 
};
for (let i = 1; i <= 10; i++) { // the variable was not declared
    console.log('is ' + i + ' perfect?: ' + isPerfect(i));
}