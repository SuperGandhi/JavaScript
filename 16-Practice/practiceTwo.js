/**
 * Form with parameters
 */

const max = function (a, b) { // parameters
    if (a > b) {
        return a;
    }
    return b;
};
console.log(max(1, 3)); // arguments
console.log(max(4, 2));
console.log(max(2, 7, 1));


/**
 * 
 * Form without parameters
 */

const maxTwo = function () {
    console.log(arguments instanceof Array);
    let large = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > large) {
            large = arguments[i];
        }
    }
    return large;
};
console.log(max(2, 1, 7, 4));

/**
 * 
 * Form with rest parameters
 *  
 */

const maxThree = function (...values) {
    console.log(values instanceof Array);
    let large = values[0];
    for (let i = 0; i < values.length; i++) {
        if (values[i] > large) {
            large = values[i];
        }
    }
    return large;
};
console.log(max(2, 1, 7, 4));

/**
 * Functional style
 */

const maxFour = function (...values) {
    return values.reduce((large, e) => large > e ? large : e, values[0]);
};


/**
 * Spread operator
 */
const names1 = ['Laurel', 'Hardy', 'Todd'];
const names2 = ['Rock'];
const sayHello = function (name1, name2) {
    console.log('hello ' + name1 + ' and ' + name2);
};
sayHello(...names1);
sayHello(...names2);



const mixed = function (name1, name2, ...names) {
    console.log('name1: ' + name1);
    console.log('name2: ' + name2);
    console.log('names: ' + names);
};
mixed('Tom', ...['Jerry', 'Tyke', 'Spike']);

const patternAndFlags = ['r', 'i'];
const regExp = new RegExp(...patternAndFlags);

// The spread operator can also be used to copy, concatenate, and manipulate

const namesOne = ['Tom', 'Jerry'];
const namesTwo = ['Butch', 'Spike', 'Tyke'];
console.log([...names1, 'Brooke']);
console.log([...names1, ...names2]);
console.log([...names2, 'Meathead', ...names1]);


// This is a feature used quite extensively in the popular JavaScript state container library Redux

const sam = {
    name: 'Sam',
    age: 2
};
console.log(sam);
console.log({
    ...sam,
    age: 3
});
console.log({
    ...sam,
    age: 4,
    height: 100
});
console.log(sam);

// Without default parameter

const sortByTitle = function (books) {
    const byTitle = function (book1, book2) {
        return book1.title.localeCompare(book2.title);
    };
    return books.slice().sort(byTitle);
};

// Using default parameter


const books = [{
        title: 'Who Moved My Cheese'
    },
    {
        title: 'Great Expectations'
    },
    {
        title: 'The Power of Positive Thinking'
    }
];


const sortByTitleTwo = function (books, ascending = true) {
    // obtiene 1 si el valor ascendente es True
    // y -1 en caso contrario
    const multiplier = ascending ? 1 : -1;
    const byTitle = function (book1, book2) {
        return book1.title.localeCompare(book2.title) * multiplier;
    };
    return books.slice().sort(byTitle);
};

console.log(sortByTitle(books));
console.log(sortByTitle(books, false));


// Multiple default parameters

const fetchData = function (
    id,
    location = {
        host: 'localhost',
        port: 443
    },
    uri = 'employees') {
    console.log('Fetch data from https://' +
        location.host + ':' + location.port + '/' + uri);
};

fetchData(1, {
    host: 'agiledeveloper',
    port: 404
}, 'books');
fetchData(1, {
    host: 'agiledeveloper',
    port: 404
});
fetchData(2);

// Expressions as default values


const fileTax = function (papers, dateOfFiling = new Date()) {
    console.log('dateOfFiling: ' + dateOfFiling.getFullYear());
};

fileTax('stuff', new Date('2016-12-31'));
fileTax('stuff');


// Exercises

/**
 * 
 * Exercise 1 
 * 
 * An amountAfterTaxes() function returns the total amount after all the taxes are
 * applied. Let’s implement that function so the output for each call in the next
 * code shows up as expected
 * 
 */

const amountAfterTaxes = function (amount, ...taxes) {
    const computeTaxForAmount = function (tax) {
        return amount * tax / 100.0;
    };
    const totalValues = function (total, value) {
        return total + value;
    };
    return taxes.map(computeTaxForAmount)
        .reduce(totalValues, amount).toFixed(2);
    //or, using arrow functions:
    //return taxes.map(tax => amount * tax / 100.0)
    // .reduce((total, value) => total + value, amount)
    // .toFixed(2);
};
const amount = 25.12;
const fedTax = 10;
const stateTax = 2;
const localTax = 0.5;
console.log(amountAfterTaxes(amount)); //25.12
console.log(amountAfterTaxes(amount, fedTax)); //27.63
console.log(amountAfterTaxes(amount, fedTax, stateTax)); //28.13
console.log(amountAfterTaxes(amount, fedTax, stateTax, localTax)); //28.26


/**
 * Exercise 2 and 3
 * 
 * The purchaseItems() function merely prints the parameters it receives, after a
 * little formatting. Two calls to the function are shown. Let’s implement a third
 * call to the function so that it produces the desired result.
 * 
 */

const purchaseItems = function (essential1 = 'milk',
    essential2 = 'bread', ...optionals) {
    console.log(essential1 + ', ' + essential2 + ', ' + optionals.join(', '));
};
const items = ['cheese', 'milk'];
purchaseItems('cheese'); //cheese, bread,
purchaseItems(...items); //cheese, milk,
purchaseItems(); //milk, bread,

/**
 * Exercise 4
 * 
 * The placeOrder() function assumes values for shipping and date if those values
 * are not given. Let’s fix the parameter list so the function behaves as expected.
 * 
 */

 const placeOrder = function (
    id, amount,
    shipping = (amount < 20 ? 5 : 10),
    date = new Date()) {
    console.log(' shipping charge for id: ' +
        id + ' is $' + shipping + ' Date:' + date.getDate());
};
//shipping, if not given, is $5 if amount less than 20 else $10
//date is today's date unless given
placeOrder(1, 12.10, 3, new Date('05/15/2018'));
placeOrder(1, 25.20, 10);
placeOrder(1, 12.05);
placeOrder(1, 25.30);
placeOrder(1, 25.20);

/**
 * Exercise 5
 * 
 * In the previous example, how can we pass the value for the date parameter
 * without passing a value for the shipping parameter?
 * 
 */

const placeOrderTwo = function (
    id, amount,
    shipping = (amount < 20 ? 5 : 10),
    date = new Date()) {
    console.log(' shipping charge:$' + shipping + ' Date:' + date.getDate());
};
placeOrder(1, 12.10, undefined, new Date('05/15/2018'));