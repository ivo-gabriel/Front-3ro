const contenedor = document.querySelector(".container");

let hoteles = [
    {
        nombre : "Lo de Ivo",
        ubi : "Sanma papa",
        stars : "4"
    },
    {
        nombre : "Hilton",
        ubi : "en algun lado",
        stars : "4"
    },
    {
        nombre : "Sheraton",
        ubi : "Retiro",
        stars : "5"
    }
];

hoteles.forEach( hotel => {

    let tarj = document.createElement('div');
    tarj.classList.add('tarjeta');

    let titulo = document.createElement('h3');
    titulo.innerHTML = `${hotel.nombre} (${hotel.stars})`;

    let contenido = document.createElement('p');
    contenido.innerHTML = `${hotel.ubi}`;

    tarj.appendChild(titulo);
    tarj.appendChild(contenido);
    contenedor.appendChild(tarj);
});

// javascripttutorial.net/javascript-dom/

/*
        <div class="tarjeta">
            <h3>${hotel.nombre} (${hotel.stars})</h3>
            <p>${hotel.ubi}</p>
        </div>  
*/