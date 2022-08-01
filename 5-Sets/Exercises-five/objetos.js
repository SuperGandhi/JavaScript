const obj = 
{   
    myName : "Patrick",
    lastName: "Borja",
    age: 25,
    height : 1.69,
    beDevelopper: true
}

const objFriends = [{
    id : 1,friendName : "Pedro", friendlastName: "Manrique",age: 21, height : 1.99, beDevelopper: false,
    id : 2,friendName : "Pepe", friendlastName: "Benedetti", age: 20, height : 1.79, beDevelopper: true
}]
    
console.log(obj.age);
console.log(Object.values(obj));

objFriends.sort((a,b) => a.age - b.age);
console.log(objFriends);