const hTexto = document.getElementById("h-text")
console.log(hTexto);

hTexto.addEventListener("changeText", event =>{
    console.log(event);
    hTexto.innerText = event.detail.text
    hTexto.style.color = event.detail.color
})

function changeText(newText, color){
    const event = new CustomEvent("changeText", {
        detail: {
            text: newText,
            color: color
        }
    })
    hTexto.dispatchEvent(event)
}