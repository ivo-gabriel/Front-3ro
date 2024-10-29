import hoteles from "./data/data.js"

const cont = document.querySelector(".container");
const btnMostrar = document.querySelector(".botonMostrar")

btnMostrar.addEventListener("click", () => (mostrarHoteles()))

function mostrarHoteles(){
    hoteles.forEach( hotel => {

        const tarj = document.createElement("div");
        tarj.classList.add("tarjeta");

        const titulo = document.createElement("h3");
        titulo.innerHTML = `${hotel.nombre}`

        const ubi = document.createElement("p");
        ubi.innerHTML = `${hotel.ubi}`

        tarj.appendChild(titulo);
        tarj.appendChild(ubi);
        
        cont.appendChild(tarj);

    });
}
// cont.innerHTML += `
// <div class="tarjeta">
//     <h3> ${hotel.nombre}</h3>
//     <p> Ubicacion: ${hotel.ubi}</p>
// </div>
// `

