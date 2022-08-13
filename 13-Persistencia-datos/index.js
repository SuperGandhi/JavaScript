// localStorage.setItem("name", "Patrick")
// localStorage.setItem("name", "Ruth")

console.log(localStorage.getItem("name"));
localStorage.setItem("person", JSON.stringify({name: "Patrick", age:23}))
console.log(JSON.parse(localStorage.getItem("person")));

// JSON.stringify -> Convierte un obj/array en string
// JSON.parse -> Convierte un obj array a través de stringify en un obj de JS

localStorage.removeItem("name");
sessionStorage.setItem("name-sesion", "Patrick");

// Cookies

document.cookie = "nameCookie=PatrickCookie"

document.cookie = "nameCaducity=Name;expires=" + new Date(2023,0,1).toUTCString()
console.log(document.cookie);