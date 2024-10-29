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
]

hoteles.forEach( hotel => {
    const tarj = document.createElement('div');
    tarj.classList.add('tarjeta');

    const titulo = document.createElement('h3');
    titulo.innerHTML = `${hotel.nombre} (${hotel.stars})`;

    const info = document.createElement('p');
    info.innerHTML = `${hotel.ubi}`;

    tarj.appendChild(titulo);
    tarj.appendChild(info);
    contenedor.appendChild(tarj);
});

/*
    <div class="tarjeta">
        <h3>${hotel.nombre} (${hotel.stars})</h3>
        <p>${hotel.ubi}</p>
    </div>
*/

// javascripttutorial.net/javascript-dom/