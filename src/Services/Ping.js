import axios from "axios";

export const Ping = () => {
    
    axios.get("https://yayta.herokuapp.com")
}

//Algunas de mis paginas demo estan hosteadas en Heroku. Este servicio despierta el server para disminuir el tiempo de carga en caso de que el usuario decida visitar la página.
