import axios from "axios";

// call
axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    // response
    .then(function (response){
        console.log("SUCCESS");
        console.log(response.data);
    })
    // catch error
    .catch(function (error){
        console.log(error);
    })