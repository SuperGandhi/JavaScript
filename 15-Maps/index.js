function initMap(){
    const position = {
        lat: -25.363,
        lng: 131.044
    }

    const map=new google.maps.Map(document.getElementById("map"),{
        zoon:4,
        center:position
    })

    const marker = new google.maps.Marker({
        position: position,
        map,
        title: "Posición Inicial"
    })

    geoPosiciona()
}

function geoPosiciona(){
    if (navigator.geolocation){
        const geoLoc = navigator.geolocation
        const wathPos = geoLoc.watchPosition()
        console.log(position.coords);
    }else{
        alert("Tu navegador no admite geolocalización")
    }
}

function centraMapa(position){
    const newPos={
        lat: position.coords,latitude,
        lng: position.coords.longitude
    }
    console.log(nuevaPos);
    map.setCenter(nuevaPos)
}

function onError(error){
    console.log("Se ha producido un error y lo hemos gestionado");
    console.error(error);
}
