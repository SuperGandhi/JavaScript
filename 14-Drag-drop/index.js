const parrafos = document.querySelectorAll(".parrafo");
// console.log(p);
const sections = document.querySelectorAll(".section");

parrafos.forEach(parrafo =>{
    parrafo.addEventListener("dragstart", event =>{
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText);
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const image = document.querySelector(".img")
        event.dataTransfer.setDragImage(image,0,0)
        // const clearData = document.querySelector(".delete-img")
        // event.dataTransfer.clearData(clearData)
    })

    parrafo.addEventListener("dragend", ()=>{
        console.log("He terminado de arrastrar");
        parrafo.classList.remove("dragging")
    })
})

sections.forEach(section => {
    section.addEventListener("dragover", event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy" // default
    })

    section.addEventListener("drop", event => {
        console.log("Drop");
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("Parrafo id: ", id_parrafo);
        const parrafo = document.getElementById(id_parrafo)
        section.appendChild(parrafo)
    })
})

function eliminar(e){
    const elementoArrastrado = document.getElementById(e.dataTransfer.getData(".delete-img")); // Elemento arrastrado
    elementoArrastrado.parentNode.removeChild(elementoArrastrado); // Elimina el elemento
    e.target.style.border = '';   // Quita el borde
}