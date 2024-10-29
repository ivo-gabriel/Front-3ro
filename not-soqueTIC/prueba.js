const cont = document.querySelector(".container");

// {
//     nombre : "Lo de Ivo",
//     ubi : "Sanma papa",
//     stars : "4"
// }


let hoteles = [
    {
        nombre : "Sheraton",
        ubi : "Retiro",
        stars : "5"
    },{
        nombre : "Hilton",
        ubi : "algun lado",
        stars : "5"
    },{
        nombre : "Lo de Ivo",
        ubi : "Sanma papa",
        stars : "4"
    }
];

hoteles.forEach( hotel => {

    cont.innerHTML += `
        <div class="tarjeta">
            <h3> ${hotel.nombre} (${hotel.stars})</h3>
            <p> Ubicacion: ${hotel.ubi}</p>
        </div>
        `

});



// javascripttutorial.net/javascript-dom/