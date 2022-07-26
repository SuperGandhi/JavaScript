// The methods most used to strings


// length : Get the lenght of a strings

let str = "Hi this is the method lenght"
console.log(str.length);

/**
 * Get parts of the string characters
 * Obtiene partes de cadenas de caracteres
 * slice --> substring --> substr (deprecated)
 */
//                    (ubicación)
let sliceStr = str.slice(0, 10)
console.log(sliceStr);

let sub_sliceStr = str.substring(0, 10)
console.log(sliceStr);

let substr_str = str.substring(5,10)
console.log(substr_str);

/**
 * Reemplazar contenido de una cadena de texto
 * 
 */

let string = "Hi my name is Patrick"
console.log(string);
console.log(string.replace('Patrick', 'Satoshi'));

let text_large = "In a similar vein, the Norway-based start-up Attent was launched in 2020 with the goal of moving “clinic-based dental healthcare to your home”. Using an intra-oral scanning device, patients are able to upload scans of their own teeth to an app, where Attent’s AI analyses each tooth for caries and enamel decay. According to the company, users of the Attent app can avoid unnecessary dental check-ups as a result."

console.log(text_large.replace('an', 'lazy'));

// with expressions regulars
// nos permiten hacer una busqueda más avanzada en nuestro texto

console.log(text_large.replace(/an/g, 'lazy'));