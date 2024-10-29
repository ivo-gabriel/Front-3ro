// Lista de hoteles
const hoteles = [
    { nombre: 'Hotel Sol', ubicacion: 'Madrid', estrellas: 4 },
    { nombre: 'Hotel Luna', ubicacion: 'Barcelona', estrellas: 5 },
    { nombre: 'Hotel Estrella', ubicacion: 'Sevilla', estrellas: 3 },
    { nombre: 'Hotel Mar', ubicacion: 'Valencia', estrellas: 4 },
    { nombre: 'Hotel Montaña', ubicacion: 'Granada', estrellas: 5 },
    { nombre: 'Hotel Playa', ubicacion: 'Málaga', estrellas: 4 },
    { nombre: 'Hotel Bosque', ubicacion: 'Bilbao', estrellas: 3 },
    { nombre: 'Hotel Río', ubicacion: 'Zaragoza', estrellas: 4 },
    { nombre: 'Hotel Nieve', ubicacion: 'León', estrellas: 5 },
    { nombre: 'Hotel Sol', ubicacion: 'Alicante', estrellas: 4 }
];

// Seleccionamos el contenedor donde insertaremos los hoteles
const hotelContainer = document.getElementById('hotelContainer');

// Iteramos sobre la lista de hoteles e insertamos en el contenedor
hoteles.forEach(hotel => {
    // Crear un div para cada hotel
    const hotelDiv = document.createElement('div');
    hotelDiv.classList.add('hotel');
    
    // Crear el contenido HTML para cada hotel
    hotelDiv.innerHTML = `
        <h3>${hotel.nombre}</h3>
        <p>Ubicación: ${hotel.ubicacion}</p>
        <p>Calificación: ${hotel.estrellas} estrellas</p>
    `;
    
    // Añadir el div al contenedor
    hotelContainer.appendChild(hotelDiv);
});
