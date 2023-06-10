//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/secondsCounter.jsx"

//definir nº de segundos
let seconds = 0;

//Definimos la función a ejecutar
function renderCounter() {
    ReactDOM.render(<SecondsCounter seconds={seconds} />,document.querySelector("#app"));
    seconds++;
}

//Definimos el cuándo ejecutar la función
setInterval(renderCounter, 1000);

