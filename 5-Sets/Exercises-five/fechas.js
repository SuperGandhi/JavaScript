const today = new Date();
console.log(today);

const dateBirt = new Date(1996,05,25);
console.log(dateBirt);

console.log(today.getTime() > dateBirt.getTime());
console.log(dateBirt.getDate());
console.log(dateBirt.getMonth());
console.log(dateBirt.getFullYear());