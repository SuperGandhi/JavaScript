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

fetchData(1, { host: 'agiledeveloper', port: 404 }, 'books');
fetchData(1, { host: 'agiledeveloper', port: 404 });
fetchData(2);