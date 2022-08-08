// import {sum, poten} from './ModulesSix/math.js'
import * as moduleMaths from './ModulesSix/math.js'
import getAutor, {book} from './ModulesSix/litterature.js';

const suma = moduleMaths.sum(12,13) 
console.log(suma);

const potencia = moduleMaths.poten(12, 2)
console.log(potencia);

console.log(getAutor());
console.log(book);