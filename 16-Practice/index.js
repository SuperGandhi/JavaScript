'use strict';

/**
 * Checking typical errors in Javascript
 */

// Example 1
const oops = function () {
    haha = 2;

    console.log(haha);
};

oops();
console.log(haha);

// Example 2
const outer = function () {
    for (let i = 1; i <= 3; i++) {
        inner();
    }
    // 1,2,3
};
const inner = function () {
    for (let i = 1; i <= 5; i++) {
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
const isPrime = function (n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return n > 1;
}
const sumOfPrimes = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) sum += i;
    }
    return sum;
}
console.log(sumOfPrimes(10));