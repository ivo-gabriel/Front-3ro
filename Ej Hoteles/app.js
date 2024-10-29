// Carga inicial de hoteles
const hotelList = document.getElementById('hotel-list');
const searchBar = document.getElementById('searchBar');
let hotels = [];

fetch('hotels.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        hotels = data;
        renderHotels(hotels);
    })
    .catch(error => console.error('Error loading hotels:', error));


// Renderizar los hoteles en el DOM
function renderHotels(hotelData) {
    hotelList.innerHTML = '';
    hotelData.forEach(hotel => {
        const hotelCard = document.createElement('div');
        hotelCard.classList.add('hotel-card');
        
        hotelCard.innerHTML = `
            <h3>${hotel.name}</h3>
            <p>${hotel.location} | ${hotel.stars} stars</p>
            <p>Rooms: ${hotel.roomsLeft}</p>
            <p>Type: ${hotel.roomType}</p>
            <p>Available: ${hotel.availableDate}</p>
            <p>Price: $${hotel.price}</p>
            <div class="hotel-actions">
                <button id="deleteBtn" onclick="deleteHotel('${hotel.id}')">X</button>
                <button id="bookBtn" onclick="">Reservar</button>
                <button id="" onclick="">add fav</button>
                <button id="" onclick="">compare</button>
            </div>
        `;
        
        hotelList.appendChild(hotelCard);
    });
}

// Filtrar hoteles por nombre o ubicación
searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredHotels = hotels.filter(hotel => 
        hotel.name.toLowerCase().includes(searchTerm) ||
        hotel.location.toLowerCase().includes(searchTerm)
    );
    renderHotels(filteredHotels);
});

// Eliminar hotel
function deleteHotel(hotelId) {
    hotels = hotels.filter(hotel => hotel.id !== hotelId);
    renderHotels(hotels);
}

// Agregar un hotel (solo una demostración, los datos no se guardan)
document.getElementById('add-hotel').addEventListener('click', () => {
    const newHotel = {
        id: Date.now().toString(),
        name: "New Hotel",
        location: "New Location",
        stars: 4,
        roomsLeft: 10,
        roomType: "Standard",
        availableDate: "2024-12-01",
        price: 150
    };
    
    hotels.push(newHotel);
    renderHotels(hotels);
});
