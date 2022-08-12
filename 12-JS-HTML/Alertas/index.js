const button = document.querySelector("#btn")
console.log(button);

button.addEventListener("click", () => {
    // console.log("click");
    alert("CLICKKKKKK!")
    confirm("¿Agree or desagree?") ? console.log("OK") : console.log("NO!!");
})

const buttonInfo = document.querySelector('#info')
buttonInfo.addEventListener("click", () => {
    const name = prompt("What is your name")
    console.log("Your name is: " + name)
    if(name){
        console.log("Your name is: " + name)
    }else{
        console.log("Don't introduce anything");
    }
})

const list = [{
    name: "Julian",
    age: 34,

}, {
    name: "Jules",
    age: 54
}]

console.table(list)